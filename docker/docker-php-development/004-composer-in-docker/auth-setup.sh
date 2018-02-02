#!/usr/bin/env bash

[ -e app/auth.json ] && echo "auth.json already exists. Skipping." && exit 0;

if [ ! -z "$BITBUCKET_CONSUMER_KEY" ] && [ ! -z "$BITBUCKET_CONSUMER_SECRET" ]; then
    cp app/auth.dist.json app/auth.json
    sed -i '' -e "s/%consumer-key%/$BITBUCKET_CONSUMER_KEY/" app/auth.json
    sed -i '' -e "s/%consumer-secret%/$BITBUCKET_CONSUMER_SECRET/" app/auth.json
    echo "Created the auth.json file"
    exit 0
fi

echo "You need to set '\$BITBUCKET_CONSUMER_KEY' and '\$BITBUCKET_CONSUMER_SECRET' environment variables!";
exit 1;