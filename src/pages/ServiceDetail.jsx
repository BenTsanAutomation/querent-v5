import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Zap, ArrowRight, Activity, Box, Sparkles } from 'lucide-react';
import './ServiceDetail.css';

const servicesData = {
    'ai-consulting': {
        title: 'AI Consulting',
        subtitle: 'Strategic guidance on integrating AI into your operations.',
        description: 'Our AI consulting services provide you with a comprehensive roadmap to success. We analyze your current processes, identify friction points, and pinpoint areas where artificial intelligence can drive the greatest ROI, from operational efficiency to completely new product capabilities.',
        features: ['Comprehensive Workflow Audit', 'AI Readiness Assessment', 'Custom Strategy Roadmap', 'Technology Stack Recommendations'],
        layoutType: 'grid'
    },
    'voice-agents': {
        title: 'AI Voice Agents',
        subtitle: 'Inbound and outbound conversational agents with sub-second latency.',
        description: 'Our conversational AI agents handle complex interactions at phone-call latency. Inbound support desks, outbound sales outreach, appointment setters, triage lines — we build the full pipeline: speech-to-text, dialog management, intent routing, and voice synthesis, instrumented end-to-end so you can audit every call.',
        features: ['Lifelike conversational ability', 'Sub-second latency', 'Dynamic context retention', 'Multilingual support'],
        layoutType: 'sidebar'
    },
    'process-automation': {
        title: 'Process Automation',
        subtitle: 'End-to-end workflow automation connecting your systems without manual intervention.',
        description: 'We eliminate repetitive, error-prone manual tasks by building robust automation pipelines. By deeply integrating with your existing CRM, ERP, and databases, we orchestrate seamless data flows across your entire organization.',
        features: ['Seamless CRM & Database Sync', 'Automated Email \u0026 Document Parsing', 'Real-time Event Routing', 'Error Logging \u0026 Alerts'],
        layoutType: 'horizontal'
    },
    'custom-models': {
        title: 'Custom Models',
        subtitle: 'Fine-tuned language models deployed to your infrastructure.',
        description: 'Off-the-shelf models are powerful, but models fine-tuned on your proprietary data deliver materially better task performance. We build, train, evaluate, and deploy specialized language models that understand the specific nuances, jargon, and constraints of your domain — with retraining pipelines so the model keeps pace with your data.',
        features: ['Proprietary Data Fine-Tuning', 'Private Infrastructure Deployment', 'Specialized Domain Knowledge', 'Continuous Model Retraining'],
        layoutType: 'minimal'
    },
    'enterprise-security': {
        title: 'Enterprise Security',
        subtitle: 'Bank-grade encryption and compliance for all AI operations.',
        description: 'Security is not an afterthought when deploying AI. We implement rigorous data partitioning, role-based access controls, and encryption standards to ensure that your data and your customer interactions remain completely protected.',
        features: ['SOC2 Compliance Standards', 'End-to-End Encryption', 'Self-Hosted Model Options', 'Strict Data Partitioning'],
        layoutType: 'grid'
    },
    'predictive-analytics': {
        title: 'Predictive Analytics',
        subtitle: 'Turn historical data into future foresight with advanced machine learning.',
        description: 'Stop reacting to the market and start anticipating it. We build statistical models that analyze your historical operational data to predict future trends, allowing you to proactively manage inventory, staffing, and sales outreach.',
        features: ['Demand Forecasting Models', 'Customer Churn Prediction', 'Automated Anomaly Detection', 'Visual Dashboards'],
        layoutType: 'horizontal'
    }
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData[serviceId] || servicesData['ai-consulting'];

    const renderLayout = () => {
        switch (service.layoutType) {
            case 'minimal':
                // Custom Models: Very clean, big typography, pill-shaped tags for features
                return (
                    <div className="layout-minimal animate-fade-in delay-100">
                        <div className="minimal-card glass-panel text-center">
                            <h2 className="minimal-heading">The AI Foundation</h2>
                            <p className="minimal-body mx-auto">{service.description}</p>

                            <h3 className="section-heading minimal-spacing">Core Capabilities</h3>
                            <div className="pill-container">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="feature-pill">
                                        <Sparkles size={16} className="text-gradient" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'horizontal':
                // Process Automation: Features as a horizontal row of neat boxes under a wide description
                return (
                    <div className="layout-horizontal animate-fade-in delay-100">
                        <div className="horizontal-card glass-panel mb-8">
                            <h2 className="section-heading">Workflow Mechanics</h2>
                            <p className="service-paragraph">{service.description}</p>
                        </div>

                        <h3 className="section-heading horizontal-spacing px-4">Core Capabilities</h3>
                        <div className="horizontal-grid">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="glass-panel horizontal-feature-box text-center">
                                    <Activity size={28} className="text-gradient mx-auto mb-3" />
                                    <p className="feature-text-bold">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'sidebar':
                // Voice Agents: Description on left, list of capabilities in distinct sidebar glass panel on right
                return (
                    <div className="layout-sidebar animate-fade-in delay-100">
                        <div className="sidebar-main glass-panel">
                            <h2 className="section-heading">Integration Details</h2>
                            <p className="service-paragraph">{service.description}</p>
                        </div>
                        <div className="sidebar-side glass-panel">
                            <h3 className="section-heading mb-6">Core Capabilities</h3>
                            <ul className="sidebar-feature-list">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <ArrowRight size={18} className="text-gradient shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );

            case 'grid':
            default:
                // AI Consulting: Standard 2-column description and clean 2x2 grid for features below
                return (
                    <div className="layout-grid animate-fade-in delay-100">
                        <div className="grid-main glass-panel">
                            <h2 className="section-heading">Strategic Overview</h2>
                            <p className="service-paragraph">{service.description}</p>

                            <h3 className="section-heading grid-spacing">Core Capabilities</h3>
                            <div className="features-grid-classic">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="feature-card-classic">
                                        <Box size={20} className="text-muted mr-3 shrink-0" />
                                        <p className="feature-text">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="service-detail-page">
            <section className="service-hero">
                <div className="container">
                    <div className="hero-nav-row">
                        <Link to="/" className="back-link">
                            <ArrowLeft size={16} /> Back to Services
                        </Link>
                    </div>

                    <div className="service-header animate-fade-in">
                        <h1 className="hero-title clean-title">
                            <span className="text-gradient">{service.title}</span>
                        </h1>
                        <p className="hero-subtitle clean-subtitle mx-auto">{service.subtitle}</p>
                    </div>
                </div>
            </section>

            <section className="section service-content-section">
                <div className="container">
                    {renderLayout()}

                    {/* Unified Universal CTA at the bottom of every layout */}
                    <div className="universal-cta animate-fade-in delay-300">
                        <div className="cta-panel pulse-border text-center mx-auto">
                            <h3 className="mb-3 font-semibold">Ready to Automate?</h3>
                            <p className="text-muted text-sm mb-6">
                                Schedule a discovery call with our team to explore tailored {service.title} solutions.
                            </p>
                            <Link to="/booking" className="btn btn-primary px-8 py-3 shadow-glow">
                                Book a Consultation <Zap size={16} className="ml-2 inline" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
