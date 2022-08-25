npm run build
ssh ssh://ncyujthp@node104-eu.n0c.com:5022 'rm -rf ./app/wave-monster-collapse/*'
scp -r -P 5022 ./build/* ncyujthp@node104-eu.n0c.com:./app/wave-monster-collapse/

