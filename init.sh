#!/bin/bash

# PATH TO YOUR HOSTS FILE
ETC_HOSTS=/etc/hosts

# DEFAULT IP FOR HOSTNAME
IP="127.0.0.1"

# Create directory for certificates
CERT_DIR="data/certs"
mkdir -p "$CERT_DIR"
cd "$CERT_DIR" || exit

# Remove existing certificates
rm -rf *

# Function to convert certificates
convert_certs() {
    local domain=$1
    openssl x509 -in "${domain}.pem" -out "${domain}.crt"
    openssl rsa -in "${domain}-key.pem" -out "${domain}.key"
}

# Function to add host to /etc/hosts
addHost() {
    local HOSTNAME=$1
    local IP_ADDR="${2:-$IP}"
    local HOSTS_LINE="${IP_ADDR}    ${HOSTNAME}"
    if grep -q "$HOSTNAME" "$ETC_HOSTS"; then
        echo "$HOSTNAME already exists in $ETC_HOSTS"
    else
        echo "Adding $HOSTNAME to $ETC_HOSTS"
        echo "$HOSTS_LINE" | sudo tee -a "$ETC_HOSTS" > /dev/null
        if grep -q "$HOSTNAME" "$ETC_HOSTS"; then
            echo "$HOSTNAME was added successfully"
        else
            echo "Failed to add $HOSTNAME. Please check permissions and try again."
        fi
    fi
}

# Main process
main() {
    local domains=(
        "app.radio-aggregator.dev"
    )

    # Ensure mkcert is installed
    if ! command -v mkcert &> /dev/null; then
        echo "mkcert is not installed. Please install it and try again."
        exit 1
    fi

    # Install the local CA in the system trust store
    mkcert -install

    for domain in "${domains[@]}"; do
        echo "=================================================="
        echo "Creating certificate for $domain"
        echo "=================================================="
        
        mkcert "$domain"
        
        echo "Converting certificates for $domain"
        convert_certs "$domain"
        
        echo "Adding $domain to hosts file"
        addHost "$domain"
        
        echo "=================================================="
        echo "Processing complete for $domain"
        echo "=================================================="
        echo
    done

    echo "All domains processed. Please restart your web server and clear your browser cache."
}

# Run the main function
main

echo "Script execution completed. If you still encounter issues, please check your web server configuration and browser settings."