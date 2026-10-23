import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// 1. 顶部 Hero Section (首屏)
function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ padding: '6rem 0' }}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          百度AI搜索 — 任务化模式
        </Heading>
        <p className="hero__subtitle" style={{ margin: '1.5rem 0 2.5rem', fontSize: '1.25rem', opacity: 0.9 }}>
          下一代智能搜索范式，从「给答案」向「交结果」进化
        </p>
        
        {/* 四个核心按钮 */}
        <div className={styles.buttons} style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            className="button button--lg"
            style={{ backgroundColor: '#fff', color: 'var(--ifm-color-primary)', border: 'none' }}
            to="https://wenxin.baidu.com">
            🌐 官网入口
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🚀 快速开始
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{ color: '#fff', borderColor: '#fff' }}
            to="https://pinchibench-web.vercel.app/">
            🏆 PinchBench 榜单
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{ color: '#fff', borderColor: '#fff' }}
            to="/docs/whitepaper">
            📖 技术白皮书
          </Link>
        </div>
      </div>
    </header>
  );
}

// 2. 下方 Benchmark 卡片网格展示区 (Grid)
function BenchmarkCards() {
  // 定义新的评测数据源
  const benchmarks = [
    {
      title: 'PinchBench',
      badge: '🥇 全球第一',
      badgeClass: 'badge--warning',
      score: '94.6%',
      desc: '真实工作流与多步骤工具调用基准测试，全面超越主流框架，零人工干预闭环。',
      buttons: [
        { label: '评测明细', link: 'https://github.com/Baidu-AI-Search/PinchBench-Evaluation', primary: true },
        { label: '榜单结果', link: 'https://pinchibench-web.vercel.app/', primary: false }
      ]
    },
    {
      title: 'SuperCLUE',
      badge: '🥇 国内第一',
      badgeClass: 'badge--secondary',
      score: '97.6%',
      desc: '多智能体任务与中文原生语境评测基准，达到国内第一',
      buttons: [
        { label: '评测明细', link: 'https://mp.weixin.qq.com/s/bL9sI7dISNRohtUdTv_72w', primary: true }, // link="#" 实现点击无跳转
        { label: '榜单结果', link: 'https://superclueai.com/xclaw', primary: false }
      ]
    }
  ];

  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--ifm-background-color)' }}>
      <div className="container">
        <Heading as="h2" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>
          📊 核心评测概览
        </Heading>
        {/* 为了美观，只有2个卡片时使用 justifyContent: 'center' 居中排布 */}
        <div className="row" style={{ justifyContent: 'center' }}>
          {benchmarks.map((item, idx) => (
            // 使用 col--5 让两个卡片占据适中宽度，不至于太宽或太窄
            <div key={idx} className="col col--5" style={{ marginBottom: '1.5rem' }}>
              <div className="card" style={{ height: '100%', boxShadow: '0 4px 8px rgba(0,0,0,0.05)', border: '1px solid var(--ifm-color-emphasis-200)' }}>
                
                <div className="card__header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Heading as="h3" style={{ margin: 0 }}>{item.title}</Heading>
                  <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
                </div>
                
                <div className="card__body">
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--ifm-color-primary)', marginBottom: '1rem' }}>
                    {item.score}
                  </div>
                  <p style={{ color: 'var(--ifm-color-emphasis-700)' }}>
                    {item.desc}
                  </p>
                </div>
                
                {/* 底部双按钮设计 */}
                <div className="card__footer" style={{ display: 'flex', gap: '0.5rem' }}>
                  {item.buttons.map((btn, bIdx) => (
                    <Link 
                      key={bIdx} 
                      className={`button button--block ${btn.primary ? 'button--secondary' : 'button--outline button--secondary'}`} 
                      to={btn.link} 
                      style={{ margin: 0 }}>
                      {btn.label}
                    </Link>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. 页面主入口
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Baidu AI Search - Orion Mission Mode`}
      description="百度AI搜索 - 任务化模式 (Orion Mission Mode) 评测与技术文档库">
      <HomepageHeader />
      <main>
        <BenchmarkCards />
      </main>
    </Layout>
  );
}