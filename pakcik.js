var users = [
            { username: 'permen', password: '1' },
            { username: 'bintang', password: '2' },
        ];
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var validUser = users.find(function(user) {
                return user.username === username && user.password === password;
            });
            if (validUser) {
                localStorage.setItem('isLoggedIn', true);
                alert('Login successful!');
                window.location.href = 'https://ddos.starsx.tech/panel';
            } else {
                document.getElementById('errorMessage').textContent = 'Invalid username or password.';
            }
        });
