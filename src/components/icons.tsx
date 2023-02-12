import React from "react";
import { ReactComponent as PythonLogo } from "../assets/icons8-python.svg";
import { ReactComponent as NodeJSLogo } from "../assets/icons8-node-js.svg";
import { ReactComponent as LinuxLogo } from "../assets/icons8-linux.svg";
import { ReactComponent as GitLogo } from "../assets/icons8-git.svg";
import { ReactComponent as SQLLogo } from "../assets/icons8-sql.svg";
import { ReactComponent as DockerLogo } from "../assets/icons8-docker.svg";
import { ReactComponent as BashLogo } from "../assets/icons8-bash.svg";
import { ReactComponent as AWSLogo } from "../assets/icons8-amazon-web-services.svg";
import { ReactComponent as K8SLogo } from "../assets/icons8-kubernetes.svg";
import { ReactComponent as KafkaLogo } from "../assets/apache_kafka-icon.svg";
import { ReactComponent as KibanaLogo } from "../assets/icons8-kibana.svg";
import { ReactComponent as TerraformLogo } from "../assets/icons8-terraform.svg";
import { ReactComponent as AnsibleLogo } from "../assets/icons8-ansible.svg";
import { ReactComponent as GrahpQLLogo } from "../assets/icons8-graphql.svg";
import { ReactComponent as GrafanaLogo } from "../assets/icons8-grafana.svg";
import { ReactComponent as GithubLogo } from "../assets/icons8-github.svg";
import { ReactComponent as BitBucketLogo } from "../assets/icons8-bitbucket.svg";
import { ReactComponent as KeycloakLogo } from "../assets/keycloak-svgrepo-com.svg";
import { ReactComponent as PrometheusLogo } from "../assets/icons8-prometheus.svg";
import { ReactComponent as ZuulLogo } from "../assets/zuul-ci-icon.svg";

export function getTechIcon(techName: string): any {
  const height = 20;
  const width = 20;
  const iconsMap: { [index: string]: any } = {
    Python: <PythonLogo height={height} width={width} />,
    NodeJS: <NodeJSLogo height={height} width={width} />,
    Linux: <LinuxLogo height={height} width={width} />,
    Git: <GitLogo height={height} width={width} />,
    SQL: <SQLLogo height={height} width={width} />,
    Docker: <DockerLogo height={height} width={width} />,
    Bash: <BashLogo height={height} width={width} />,
    AWS: <AWSLogo height={height} width={width} />,
    Kubernetes: <K8SLogo height={height} width={width} />,
    Kafka: <KafkaLogo height={height} width={width} />,
    Kibana: <KibanaLogo height={height} width={width} />,
    Terraform: <TerraformLogo height={height} width={width} />,
    Ansible: <AnsibleLogo height={height} width={width} />,
    GraphQL: <GrahpQLLogo height={height} width={width} />,
    Grafana: <GrafanaLogo height={height} width={width} />,
    Github: <GithubLogo height={height} width={width} />,
    Bitbucket: <BitBucketLogo height={height} width={width} />,
    Keycloak: <KeycloakLogo height={height} width={width} />,
    Prometheus: <PrometheusLogo height={height} width={width} />,
    Zuul: <ZuulLogo height={height} width={width} />,
  };

  if (techName === "Apache Kafka") techName = "Kafka";
  else if (techName === "Github Actions") techName = "Github";
  return iconsMap[techName];
}
