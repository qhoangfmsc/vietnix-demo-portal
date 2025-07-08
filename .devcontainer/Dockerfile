FROM mcr.microsoft.com/devcontainers/typescript-node:20

# Cài đặt zsh và yarn nếu cần
USER root
RUN apt-get update \
    && apt-get install -y zsh \
    && npm install -g yarn \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Đặt shell mặc định là zsh
SHELL ["/bin/zsh", "-c"]

USER node 