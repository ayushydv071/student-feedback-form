pipeline {
agent any


stages {
    stage('Checkout') {
        steps {
            git branch: 'main',
                url: 'https://github.com/ayushydv071/student-feedback-form.git'
        }
    }

    stage('Test HTML Form') {
        steps {
            sh '''
                set -eu
                test -f index.html
                echo "PASS: index.html exists"

                grep -qi '<form' index.html
                echo "PASS: Form exists"

                grep -qi 'name' index.html
                echo "PASS: Name field exists"

                grep -qi 'email' index.html
                echo "PASS: Email field exists"

                echo "All HTML form tests passed!"
            '''
        }
    }
}

post {
    success {
        echo 'BUILD SUCCESS: All HTML tests passed.'
    }
    failure {
        echo 'BUILD FAILURE: HTML tests failed.'
    }
}


}
