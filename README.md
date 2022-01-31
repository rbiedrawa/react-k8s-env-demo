# React k8s env variables (demo)

This repository demonstrates how to inject env variables into react application running inside kubernetes or docker-compose.


## Getting Started

### Prerequisites

* Docker
* Kubernetes

### Usage

#### Docker Compose

* Start docker compose.
  ```shell
  docker-compose up -d 
  ```

* Open your web browser and go to react app [home page](http://localhost:3000/).

* Stop docker compose.
  ```shell
  docker-compose down -v
  ```

#### Kubernetes

* Start application using skaffold.
  ```shell
  skaffold dev --port-forward
  ```
* Open your web browser and go to react app [home page](http://localhost:3000/).

* Stop skaffold dev (`CTRL + C`).

## References

## License

Distributed under the MIT License. See `LICENSE` for more information.
