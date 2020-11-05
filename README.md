# React Env variables demo

Example how to use inject env variables into react app running in k8s and docker

### Getting Started React 

docker build -t react-k8s .

### Run docker compose 

```
docker-compose up -d
```

### Deploy react app to k8s
```
kubectl create ns react-app-demo

kubectl apply -f k8s/cfg.yml -n react-app-demo
kubectl apply -f k8s/ -n react-app-demo

kubectl port-forward -n react-app-demo svc/react-app-service 7777:80 

curl http://localhost:7777/config.js

# output window.APP_MESSAGE= "Hello from k8s production env!!!"

kubectl delete -f k8s/ -n react-app-demo
or
kubectl delete all --all -n react-app-demo
```


