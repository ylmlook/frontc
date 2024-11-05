document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // 阻止表单默认提交行为
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('http://your-backend-url/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // 登录成功
            alert('登录成功！');
            // 可以在这里存储token
            localStorage.setItem('token', data.token);
            // 跳转到首页或其他页面
            window.location.href = '/dashboard';
        } else {
            // 登录失败
            alert('登录失败：' + data.message);
        }
    } catch (error) {
        console.error('登录请求出错：', error);
        alert('登录请求失败，请稍后重试');
    }
}); 