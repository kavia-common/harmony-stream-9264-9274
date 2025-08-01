#!/bin/bash
cd /home/kavia/workspace/code-generation/harmony-stream-9264-9274/frontend_react_client
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

