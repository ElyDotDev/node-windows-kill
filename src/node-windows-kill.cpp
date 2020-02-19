#include <napi.h>
#include <stdexcept>
#include "windows-kill-library.h"

using WindowsKillLibrary::sendSignal;
using WindowsKillLibrary::warmUp;
using WindowsKillLibrary::SIGNAL_TYPE_CTRL_C;
using WindowsKillLibrary::SIGNAL_TYPE_CTRL_BREAK;
#define NODEWINDOWSKILL_VERSION "0.3.0"

Napi::Value SendSig(const Napi::CallbackInfo &info) {
	Napi::Env env = info.Env();
	if (info.Length() < 2) {
		Napi::TypeError::New(env, "Wrong number of arguments")
			.ThrowAsJavaScriptException();
		return env.Null();
	}

	if (!info[0].IsNumber() || !info[1].IsNumber()) {
		Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
		return env.Null();
	}

	DWORD signal_pid = (DWORD)info[0].As<Napi::Number>().Int32Value();
	DWORD signal_type = (DWORD)info[1].As<Napi::Number>().Int32Value();

	try {
		if (signal_type == 1) {
			sendSignal(signal_pid, SIGNAL_TYPE_CTRL_BREAK);
		}
		else {
			sendSignal(signal_pid, SIGNAL_TYPE_CTRL_C);
		}
		// info.GetReturnValue().Set(0);
		return Napi::Number::New(env,0);
	}
	catch (const std::invalid_argument& exception) {
		if (strcmp(exception.what(), "ESRCH") == 0) {
			return Napi::String::New(env, "ESRCH");
		}
		return Napi::String::New(env, "ESYS");
	}
	catch (const std::runtime_error& exception) {
		if (strcmp(exception.what(), "EPERM") == 0) {
			return Napi::String::New(env, "EPERM");
		}
		return Napi::String::New(env, "ESYS");
	}
	catch (std::exception) {
		return Napi::String::New(env, "ESYS");
	}
}

Napi::Value WarmUp(const Napi::CallbackInfo& info) {
	Napi::Env env = info.Env();
    try {
        warmUp();
    }
    catch (const std::invalid_argument& exception) {
		if (strcmp(exception.what(), "Invalid which argument.") == 0) {
			return Napi::String::New(env, "Invalid which argument.");
		}
		return Napi::String::New(env, "ESYS");
	}
	catch (std::exception) {
		return Napi::String::New(env, "ESYS");
	}
	return env.Null();
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "send"), Napi::Function::New(env, SendSig));
  exports.Set(Napi::String::New(env, "warmUp"), Napi::Function::New(env, WarmUp));
  return exports;
}

NODE_API_MODULE(windowskill, Init)