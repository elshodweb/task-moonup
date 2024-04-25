import { useEffect } from 'react';

const RecaptchaComponent: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6LfTncYpAAAAAKGZC-_hwShYESGi86xAopivNnm7';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    (window as any).grecaptcha.enterprise.ready(async () => {
      const token = await (window as any).grecaptcha.enterprise.execute('6LfTncYpAAAAAKGZC-_hwShYESGi86xAopivNnm7', { action: 'LOGIN' });
      // Здесь можно добавить логику для использования токена, например, отправка на сервер
      console.log('Token:', token);
    });
  };

  return (
    <button onClick={onClick}>
      Submit
    </button>
  );
};

export default RecaptchaComponent;
