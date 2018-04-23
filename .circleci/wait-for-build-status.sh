#!/bin/bash

attempt=0
success=false
echo "waiting for build ${build_num}"
while [ $attempt -le 590 ]; do
    attempt=$(( $attempt + 1 ))
    echo "Waiting for server to be up (attempt: $attempt)..."
    curl --user ${CIRCLE_API_TOKEN}: \
      --header "Content-Type: application/json" \
      https://circleci.com/api/v1.1/project/github/$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME/${build_num} > output
    cat output
    status="$(cat output | jq '.status')"

    if [[ "$status" == "success" ]]; then
      echo "build succeeded"
      exit 0
    elif [[ "$status" == "failed" ]]; then
      echo "build failed"
      exit 1
    fi
    echo "build didn't finish: ${status}"
    sleep 2
done
echo "build wait timed out"
exit 1
