// пример отдельного компонента кнопки
// экспорт по умолчанию написан перед объявлением функции

export default function MyButton({ type = "button", func, text }) {
  return (
    <button type={type} onClick={func}>
      {text}
    </button>
  );
}
