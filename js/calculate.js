function calculateCycle() {
  const day = parseInt(document.getElementById('birthDay').value);
  const month = parseInt(document.getElementById('birthMonth').value);
  const errorDiv = document.getElementById('error');
  const resultDiv = document.getElementById('result');
  const cycleNumberSpan = document.getElementById('cycleNumber');
  const cycleDesc = document.getElementById('cycleDescription');

  if (!day || !month || day < 1 || day > 31 || month < 1 || month > 12) {
    errorDiv.textContent = '❗ Пожалуйста, введите корректные день (1-31) и месяц (1-12).';
    resultDiv.style.display = 'none';
    return;
  }
  errorDiv.textContent = '';

  const currentYear = new Date().getFullYear();
  const yearDigits = String(currentYear).split('').map(Number);
  const sumYear = yearDigits.reduce((a, b) => a + b, 0);

  let total = day + month + sumYear;
  while (total > 9) {
    const digits = String(total).split('').map(Number);
    total = digits.reduce((a, b) => a + b, 0);
  }

  resultDiv.style.display = 'block';
  cycleNumberSpan.textContent = total;

  const descriptions = {
    1: 'Начало нового цикла, лидерство, независимость, новые проекты. Отличное время для стартов и смелых решений.',
    2: 'Партнёрство, дипломатия, терпение, сотрудничество. Учитесь слушать и находить компромиссы.',
    3: 'Творчество, общение, радость, самовыражение. Занимайтесь искусством, расширяйте круг общения.',
    4: 'Стабильность, порядок, дисциплина, труд. Сосредоточьтесь на делах, стройте фундамент для будущего.',
    5: 'Перемены, свобода, приключения, адаптация. Будьте открыты новому, не бойтесь менять планы.',
    6: 'Забота, семья, любовь, ответственность. Уделите время близким, создавайте гармонию в доме.',
    7: 'Самоанализ, духовность, мудрость, уединение. Погрузитесь в себя, ищите ответы внутри.',
    8: 'Власть, успех, материальный рост, амбиции. Действуйте решительно, управляйте ресурсами.',
    9: 'Завершение, сострадание, гуманизм, отпускание. Завершайте старые дела, помогайте другим.'
  };

  cycleDesc.textContent = descriptions[total] || 'Описание отсутствует.';
}

// Обработка нажатия Enter в полях ввода
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('#birthDay, #birthMonth');
  inputs.forEach(input => {
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        calculateCycle();
      }
    });
  });
});