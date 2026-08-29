module.exports = {
  apps : [
      {
    name   : "config-server",
    script : ". java -jar target/Config-Server-1.0.0.jar",
        log_file : "./logs/config-server.log"
  }, {
      name   : "service-registry",
      script : " java -jar target/Service-Registry-1.0.0.jar",
      log_file : "./logs/service-registry.log"

    }, {
      name   : "api-gateway",
      script : " java -jar target/Api-Gateway-1.0.0.jar",
      log_file : "./logs/api-gateway.log"

    },




  ]
}
