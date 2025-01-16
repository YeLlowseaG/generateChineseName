document.getElementById('nameForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const originalName = form.originalName.value;
    const gender = form.gender.value;
    const style = form.style.value;

    // 显示加载状态
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');

    try {
        const response = await fetch('https://your-api-endpoint.com/generate-names', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                originalName,
                gender,
                style
            })
        });

        const data = await response.json();
        
        // 显示结果
        const namesList = document.getElementById('namesList');
        namesList.innerHTML = data.names.map(name => `
            <div class="name-card">
                <h3>${name}</h3>
                <button onclick="showExplanation('${name}')" class="explain-btn">
                    查看详细解释
                </button>
            </div>
        `).join('');

        document.getElementById('results').classList.remove('hidden');
    } catch (error) {
        alert('生成名字时出错，请稍后再试');
    } finally {
        document.getElementById('loading').classList.add('hidden');
    }
});

function showExplanation(name) {
    // TODO: 实现名字解释功能
    alert(`这里是 ${name} 的详细解释`);
} 