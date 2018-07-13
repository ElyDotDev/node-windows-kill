{
    "targets": [
        {
            "target_name": "windows-kill",
            "product_extension": "node",
            "defines": [ "V8_DEPRECATION_WARNINGS=1" ],
            "include_dirs": [
                "<!(node -e require('nan'))",
                "src/windows-kill-library/"
            ],
            "libraries": [ "-lDbghelp" ],
            "sources": [
                "src/windows-kill-library/windows-kill-library.cpp",
                "src/windows-kill-library/signal.cpp",
                "src/windows-kill-library/sender.cpp",
                "src/windows-kill-library/ctrl-routine.cpp",
                "src/windows-kill-library/remote-process.cpp",
                "src/windows-kill-library/stdafx.cpp",
                "src/node-windows-kill.cpp"
            ],
            "configurations": {
                "Release": {
                    "msvs_settings": {
                        "VCCLCompilerTool": {
                            "ExceptionHandling": 1
                        }
                    }
                },
                "Debug": {
                            "msvs_settings": {
                                "VCCLCompilerTool": {
                                    "ExceptionHandling": 1
                                }
                            }
                        }
            },
            "conditions": [
                ["OS=='win'", {
                    "defines": [
                        "_HAS_EXCEPTIONS=1"
                    ]
                }]
            ]
        },
        {
            "target_name": "action_after_build",
            "type": "none",
            "dependencies": [ "<(module_name)" ],
            "copies": [
            {
                "files": [ "<(PRODUCT_DIR)/<(module_name).node" ],
                "destination": "<(module_path)"
            }
            ]
        }
    ]
}

