pipeline {
agent any

```
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

                grep -Eqi 'type=["\\x27]text["\\x27]' index.html
                echo "PASS: Text input exists"

                grep -Eqi 'type=["\\x27]email["\\x27]' index.html
                echo "PASS: Email input exists"

                grep -Eqi 'type=["\\x27](tel|number)["\\x27]' index.html
                echo "PASS: Contact input exists"

                grep -Eqi 'type=["\\x27]submit["\\x27]' index.html
                echo "PASS: Submit button exists"

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
```

}
