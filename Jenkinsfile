pipeline {

    agent any

    environment {
        IMAGE = "mini-gps:latest"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/MADHU871/mini-gps.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Docker Run') {
            steps {
                sh '''
                docker stop mini-gps || true
                docker rm mini-gps || true

                docker run -d \
                --name mini-gps \
                -p 3000:3000 \
                $IMAGE
                '''
            }
        }

    }
}