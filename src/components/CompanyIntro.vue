<template>
  <div class="company-intro">
    <h2>公司简介</h2>
    <div class="intro-content">
      <p>我们是一家致力于创新和卓越的科技公司，专注于为客户提供最优质的解决方案。</p>
      <p>成立于2010年，我们已经服务了超过1000家企业客户，在行业内建立了良好的口碑。</p>
      <div class="company-features">
        <div class="feature">
          <h3>创新</h3>
          <p>持续追求技术创新</p>
        </div>
        <div class="feature">
          <h3>专业</h3>
          <p>专业团队提供支持</p>
        </div>
        <div class="feature">
          <h3>品质</h3>
          <p>注重产品质量</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-intro {
  padding: 2em;
  max-width: 800px;
  margin: 2em auto;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.intro-content {
  text-align: left;
  margin-top: 1em;
}

.intro-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1em;
}

.company-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  margin-top: 2em;
}

.feature {
  padding: 1.5em;
  border-radius: 8px;
  background-color: #f8f8f8;
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

h2 {
  color: #2c3e50;
  margin-bottom: 1em;
  font-size: 2em;
  text-align: center;
}

h3 {
  color: #42b883;
  margin-bottom: 0.5em;
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .company-features {
    grid-template-columns: 1fr;
    gap: 1em;
  }
  
  .company-intro {
    margin: 1em;
    padding: 1em;
  }
}
</style> 