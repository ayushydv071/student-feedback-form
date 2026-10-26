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
            bat '''
                @echo off

                if not exist index.html (
                    echo FAIL: index.html not found
                    exit /b 1
                )
                echo PASS: index.html exists

                findstr /i /c:"<form" index.html >nul
                if errorlevel 1 (
                    echo FAIL: Form not found
                    exit /b 1
                )
                echo PASS: Form exists

                findstr /i "name" index.html >nul
                if errorlevel 1 (
                    echo FAIL: Name field reference not found
                    exit /b 1
                )
                echo PASS: Name field reference exists

                findstr /i "email" index.html >nul
                if errorlevel 1 (
                    echo FAIL: Email field reference not found
                    exit /b 1
                )
                echo PASS: Email field reference exists

                echo All HTML form tests passed!
            '''
        }
    }
}

post {
    success {
        echo 'BUILD SUCCESS: HTML tests passed.'
    }

    failure {
        echo 'BUILD FAILURE: HTML tests failed.'
    }
}


}
