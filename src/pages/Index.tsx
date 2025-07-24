import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getAnimationClass = (id: string, animation: string = 'fade-in') => {
    return visibleElements.has(id) ? `animate-${animation}` : 'opacity-0';
  };

  const services = [
    {
      icon: 'Network',
      title: 'Внедрение цифровых инструментов',
      description: 'Интеграция современных IT-решений в бизнес-процессы для повышения эффективности'
    },
    {
      icon: 'Workflow',
      title: 'B2B-автоматизация процессов',
      description: 'Автоматизация рутинных операций и оптимизация корпоративных workflow'
    },
    {
      icon: 'Code',
      title: 'Разработка корпоративного ПО',
      description: 'Создание индивидуальных программных решений под специфику вашего бизнеса'
    },
    {
      icon: 'Brain',
      title: 'Интеграция AI/ML',
      description: 'Внедрение искусственного интеллекта и машинного обучения в корпоративные процессы'
    }
  ];

  const benefits = [
    {
      icon: 'Zap',
      title: 'Работаем быстро и гибко',
      description: 'Agile-подход к проектам, быстрая адаптация к изменениям требований'
    },
    {
      icon: 'Lightbulb',
      title: 'Простые решения для сложных задач',
      description: 'Находим элегантные решения даже для самых комплексных бизнес-процессов'
    },
    {
      icon: 'Target',
      title: 'Продуктовый подход',
      description: 'Фокусируемся на результате и бизнес-ценности каждого решения'
    },
    {
      icon: 'Building2',
      title: 'Опыт в корпоративных проектах',
      description: 'Глубокое понимание специфики крупного бизнеса и enterprise-решений'
    }
  ];

  const cases = [
    {
      title: 'Автоматизация CRM для производственной компании',
      result: 'Увеличение конверсии на 35%',
      metrics: ['300+ процессов автоматизировано', '2 месяца внедрения', '40% экономия времени'],
      industry: 'Производство'
    },
    {
      title: 'AI-система анализа данных для логистики',
      result: 'Снижение затрат на 25%',
      metrics: ['1000+ маршрутов оптимизировано', '95% точность прогнозов', '30% ускорение доставки'],
      industry: 'Логистика'
    },
    {
      title: 'Цифровая трансформация финтех-стартапа',
      result: 'Рост выручки в 3 раза',
      metrics: ['500K+ пользователей', '99.9% uptime', '50% снижение операционных расходов'],
      industry: 'Финансы'
    }
  ];

  const testimonials = [
    {
      text: 'ITERA BUSINESS помогла нам кардинально изменить подход к работе с данными. Внедренная система аналитики позволила принимать более обоснованные решения.',
      author: 'Алексей Петров',
      position: 'CTO, TechCorp'
    },
    {
      text: 'Команда показала глубокое понимание наших бизнес-процессов и предложила решения, которые реально работают в production.',
      author: 'Мария Сидорова',
      position: 'Директор по развитию, InnovateLab'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/b973a592-1fed-466d-9c42-5b3d5331bb58.jpg" 
              alt="ITERA BUSINESS Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="font-montserrat font-bold text-xl text-primary">
              ITERA <span className="text-foreground">BUSINESS</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#cases" className="text-muted-foreground hover:text-primary transition-colors">Кейсы</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="font-medium">
            Консультация
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rotate-45 rounded-lg animate-float"></div>
          <div className="absolute top-40 right-20 w-20 h-20 border-2 border-accent/30 rotate-12 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border-2 border-primary/25 -rotate-12 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 
                className="md:text-6xl font-montserrat font-bold text-foreground mb-6 leading-tight animate-fade-in text-4xl"
                data-animate
                id="hero-title"
              >
                Цифровая трансформация{' '}
                <span className="text-primary">вашего бизнеса</span>
              </h1>
              <p 
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in"
                data-animate
                id="hero-subtitle"
                style={{animationDelay: '0.2s'}}
              >
                Инновационные IT-решения для роста и эффективности. 
                Автоматизируем процессы, внедряем AI и создаем корпоративные продукты.
              </p>
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in"
                data-animate
                id="hero-buttons"
                style={{animationDelay: '0.4s'}}
              >
                <Button size="lg" className="px-8 py-3 text-lg font-medium hover:scale-105 transition-transform">
                  <Icon name="MessageCircle" size={20} />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                  <Icon name="Play" size={20} />
                  Смотреть кейсы
                </Button>
              </div>
            </div>
            <div 
              className="relative animate-fade-in-right"
              data-animate
              id="hero-image"
              style={{animationDelay: '0.6s'}}
            >
              <img 
                src="/img/b464a60c-062e-4d4d-aae3-edb8c9b31ae2.jpg"
                alt="Digital Transformation Illustration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div 
            className={`text-center mb-16 ${getAnimationClass('services-header')}`}
            data-animate
            id="services-header"
          >
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Что мы делаем
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные IT-решения для цифровой трансформации вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${getAnimationClass(`service-${index}`, 'scale-in')}`}
                data-animate
                id={`service-${index}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg font-montserrat font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/3 h-96 opacity-20">
          <img 
            src="/img/40021810-a674-4766-8f03-dce3b36cfc75.jpg"
            alt="Technology Automation"
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`text-center mb-16 ${getAnimationClass('benefits-header')}`}
            data-animate
            id="benefits-header"
          >
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Почему мы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наши принципы работы и ключевые преимущества
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${getAnimationClass(`benefit-${index}`, 'fade-in-left')}`}
                data-animate
                id={`benefit-${index}`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-accent/20 transition-colors">
                  <Icon name={benefit.icon} size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Кейсы внедрения
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные проекты и достигнутые результаты
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{caseItem.industry}</Badge>
                  </div>
                  <CardTitle className="text-lg font-montserrat font-semibold">
                    {caseItem.title}
                  </CardTitle>
                  <div className="text-accent font-semibold text-lg">
                    {caseItem.result}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {caseItem.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="CheckCircle" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Отзывы клиентов
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Icon name="Quote" size={24} className="text-primary mb-4" />
                    <p className="text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute left-0 top-1/4 w-1/3 h-96 opacity-10">
          <img 
            src="/img/ecd8da21-121e-43d0-8786-1987b69493b4.jpg"
            alt="Team Collaboration"
            className="w-full h-full object-cover rounded-r-3xl"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div 
              className={`text-center mb-12 ${getAnimationClass('cta-header')}`}
              data-animate
              id="cta-header"
            >
              <h2 className="text-4xl font-montserrat font-bold mb-4">
                Расскажите о вашем бизнесе — мы предложим решение
              </h2>
              <p className="text-lg text-white/90">
                Получите персональную консультацию и план цифровой трансформации
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div 
                className={`${getAnimationClass('cta-benefits', 'fade-in-left')}`}
                data-animate
                id="cta-benefits"
                style={{animationDelay: '0.2s'}}
              >
                <h3 className="text-2xl font-montserrat font-semibold mb-6">
                  Начните трансформацию уже сегодня
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-400 mr-3" />
                    <span>Бесплатная консультация 60 минут</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-400 mr-3" />
                    <span>Анализ текущих процессов</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-400 mr-3" />
                    <span>Рекомендации по оптимизации</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-400 mr-3" />
                    <span>Roadmap внедрения решений</span>
                  </li>
                </ul>
              </div>
              
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Расскажите о вашем бизнесе и задачах"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
                      <Icon name="Send" size={20} />
                      Получить консультацию
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/f5f67257-97a8-461d-a6eb-87f0d1cb1ad1.jpg" 
                  alt="ITERA BUSINESS Logo" 
                  className="w-10 h-10 object-contain"
                />
                <div className="font-montserrat font-bold text-lg">
                  ITERA BUSINESS
                </div>
              </div>
              <p className="text-white/70">
                Цифровая трансформация для роста вашего бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Автоматизация процессов</li>
                <li>Корпоративное ПО</li>
                <li>AI/ML решения</li>
                <li>Цифровые инструменты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Блог</li>
                <li>Карьера</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center text-white/70">
                  <Icon name="Mail" size={16} className="mr-2" />
                  hello@itera.business
                </div>
                <div className="flex items-center text-white/70">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  @itera_business
                </div>
                <div className="flex space-x-3 mt-4">
                  <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-2">
                    <Icon name="Linkedin" size={18} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-2">
                    <Icon name="Github" size={18} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-2">
                    <Icon name="Twitter" size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 ITERA BUSINESS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;