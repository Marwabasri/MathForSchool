
    // Fungsi Utilitas
    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function formatNumberWithSpaces(num, length) {
      return num.toString().padStart(length, ' ');
    }

    // Memulai latihan interaktif saat halaman dimuat
    document.addEventListener('DOMContentLoaded', function() {
      // Inisialisasi variabel global untuk skor
      let score = 0;
      let totalQuestions = 0;
      
      // Penjumlahan Interaktif
      function setupPenjumlahan() {
        const num1 = generateRandomNumber(100, 999);
        const num2 = generateRandomNumber(100, 999);
        const result = num1 + num2;
        
        const num1Elem = document.getElementById('penjumlahan-num1');
        const num2Elem = document.getElementById('penjumlahan-num2');
        const inputs = document.querySelectorAll('#penjumlahan-interaktif input');
        const resultElem = document.getElementById('penjumlahan-result');
        
        num1Elem.textContent = formatNumberWithSpaces(num1, 3);
        num2Elem.textContent = '+ ' + formatNumberWithSpaces(num2, 3);
        
        // Reset input dan pesan hasil
        inputs.forEach(input => {
          input.value = '';
          input.classList.remove('correct', 'incorrect');
        });
        resultElem.textContent = '';
        resultElem.className = '';
        
        const resultStr = result.toString();
        
        // Inisialisasi tombol periksa
        document.getElementById('check-penjumlahan').onclick = function() {
          let isCorrect = true;
          let userAnswer = '';
          
          // Periksa setiap digit
          for (let i = 0; i < inputs.length; i++) {
            const expectedDigit = resultStr[resultStr.length - 1 - i] || '0';
            const userDigit = inputs[i].value;
            userAnswer = userDigit + userAnswer;
            
            if (userDigit === expectedDigit) {
              inputs[i].classList.add('correct');
              inputs[i].classList.remove('incorrect');
            } else {
              inputs[i].classList.add('incorrect');
              inputs[i].classList.remove('correct');
              isCorrect = false;
            }
          }
          
          if (isCorrect) {
            resultElem.textContent = 'Benar! ' + num1 + ' + ' + num2 + ' = ' + result;
            resultElem.className = 'text-green-600 font-semibold';
          } else {
            resultElem.textContent = 'Belum tepat, coba lagi.';
            resultElem.className = 'text-red-600 font-semibold';
          }
        };
        
        // Tombol soal baru
        document.getElementById('new-penjumlahan').onclick = setupPenjumlahan;
      }

      // Pengurangan Interaktif
      function setupPengurangan() {
        let num1 = generateRandomNumber(500, 999);
        let num2 = generateRandomNumber(100, 499);
        const result = num1 - num2;
        
        const num1Elem = document.getElementById('pengurangan-num1');
        const num2Elem = document.getElementById('pengurangan-num2');
        const inputs = document.querySelectorAll('#pengurangan-interaktif input');
        const resultElem = document.getElementById('pengurangan-result');
        
        num1Elem.textContent = formatNumberWithSpaces(num1, 3);
        num2Elem.textContent = '- ' + formatNumberWithSpaces(num2, 3);
        
        // Reset input dan pesan hasil
        inputs.forEach(input => {
          input.value = '';
          input.classList.remove('correct', 'incorrect');
        });
        resultElem.textContent = '';
        resultElem.className = '';
        
        const resultStr = result.toString();
        
        // Inisialisasi tombol periksa
        document.getElementById('check-pengurangan').onclick = function() {
          let isCorrect = true;
          let userAnswer = '';
          
          // Periksa setiap digit
          for (let i = 0; i < inputs.length; i++) {
            const expectedDigit = resultStr[resultStr.length - 1 - i] || '0';
            const userDigit = inputs[i].value;
            userAnswer = userDigit + userAnswer;
            
            if (userDigit === expectedDigit) {
              inputs[i].classList.add('correct');
              inputs[i].classList.remove('incorrect');
            } else {
              inputs[i].classList.add('incorrect');
              inputs[i].classList.remove('correct');
              isCorrect = false;
            }
          }
          
          if (isCorrect) {
            resultElem.textContent = 'Benar! ' + num1 + ' - ' + num2 + ' = ' + result;
            resultElem.className = 'text-green-600 font-semibold';
          } else {
            resultElem.textContent = 'Belum tepat, coba lagi.';
            resultElem.className = 'text-red-600 font-semibold';
          }
        };
        
        // Tombol soal baru
        document.getElementById('new-pengurangan').onclick = setupPengurangan;
      }

      // Perkalian Interaktif
      function setupPerkalian() {
        const num1 = generateRandomNumber(10, 99);
        const num2 = generateRandomNumber(2, 9);
        const result = num1 * num2;
        
        const num1Elem = document.getElementById('perkalian-num1');
        const num2Elem = document.getElementById('perkalian-num2');
        const inputs = document.querySelectorAll('#perkalian-interaktif input');
        const resultElem = document.getElementById('perkalian-result');
        
        num1Elem.textContent = formatNumberWithSpaces(num1, 2);
        num2Elem.textContent = '× ' + formatNumberWithSpaces(num2, 2);
        
        // Reset input dan pesan hasil
        inputs.forEach(input => {
          input.value = '';
          input.classList.remove('correct', 'incorrect');
        });
        resultElem.textContent = '';
        resultElem.className = '';
        
        const resultStr = result.toString();
        
        // Inisialisasi tombol periksa
        document.getElementById('check-perkalian').onclick = function() {
          let isCorrect = true;
          let userAnswer = '';
          
          // Periksa setiap digit
          for (let i = 0; i < inputs.length; i++) {
            const expectedDigit = resultStr[resultStr.length - 1 - i] || '0';
            const userDigit = inputs[i].value;
            userAnswer = userDigit + userAnswer;
            
            if (userDigit === expectedDigit) {
              inputs[i].classList.add('correct');
              inputs[i].classList.remove('incorrect');
            } else {
              inputs[i].classList.add('incorrect');
              inputs[i].classList.remove('correct');
              isCorrect = false;
            }
          }
          
          if (isCorrect) {
            resultElem.textContent = 'Benar! ' + num1 + ' × ' + num2 + ' = ' + result;
            resultElem.className = 'text-green-600 font-semibold';
          } else {
            resultElem.textContent = 'Belum tepat, coba lagi.';
            resultElem.className = 'text-red-600 font-semibold';
          }
        };
        
        // Tombol soal baru
        document.getElementById('new-perkalian').onclick = setupPerkalian;
      }

      // Pembagian Interaktif
      function setupPembagian() {
        const divisor = generateRandomNumber(2, 9);
        const quotient = generateRandomNumber(10, 50);
        const dividend = divisor * quotient;
        
        const problemElem = document.getElementById('pembagian-problem');
        const inputs = document.querySelectorAll('#pembagian-interaktif input');
        const resultElem = document.getElementById('pembagian-result');
        
        problemElem.textContent = divisor + ')' + dividend;
        
        // Reset input dan pesan hasil
        inputs.forEach(input => {
          input.value = '';
          input.classList.remove('correct', 'incorrect');
        });
        resultElem.textContent = '';
        resultElem.className = '';
        
        const quotientStr = quotient.toString();
        
        // Inisialisasi tombol periksa
        document.getElementById('check-pembagian').onclick = function() {
          let isCorrect = true;
          let userAnswer = '';
          
          // Periksa setiap digit
          for (let i = 0; i < inputs.length; i++) {
            const expectedDigit = quotientStr[quotientStr.length - 1 - i] || '0';
            const userDigit = inputs[i].value;
            userAnswer = userDigit + userAnswer;
            
            if (userDigit === expectedDigit) {
              inputs[i].classList.add('correct');
              inputs[i].classList.remove('incorrect');
            } else {
              inputs[i].classList.add('incorrect');
              inputs[i].classList.remove('correct');
              isCorrect = false;
            }
          }
          
          if (isCorrect) {
            resultElem.textContent = 'Benar! ' + dividend + ' ÷ ' + divisor + ' = ' + quotient;
            resultElem.className = 'text-green-600 font-semibold';
          } else {
            resultElem.textContent = 'Belum tepat, coba lagi.';
            resultElem.className = 'text-red-600 font-semibold';
          }
        };
        
        // Tombol soal baru
        document.getElementById('new-pembagian').onclick = setupPembagian;
      }

      // Latihan Soal Campuran
      function setupLatihan(type) {
        const container = document.getElementById('latihan-soal-container');
        const controlsElem = document.getElementById('latihan-controls');
        const skorElem = document.getElementById('latihan-skor');
        let operation, num1, num2, result, operationSymbol;
        
        // Reset skor jika jenis operasi berubah
        score = 0;
        totalQuestions = 0;
        document.getElementById('skor').textContent = score;
        document.getElementById('total-soal').textContent = totalQuestions;
        
        // Tentukan operasi berdasarkan tipe
        if (type === 'campuran') {
          // Pilih operasi secara acak
          const operations = ['penjumlahan', 'pengurangan', 'perkalian', 'pembagian'];
          operation = operations[Math.floor(Math.random() * operations.length)];
        } else {
          operation = type;
        }
        
        // Setup berdasarkan operasi
        switch (operation) {
          case 'penjumlahan':
            num1 = generateRandomNumber(100, 999);
            num2 = generateRandomNumber(100, 999);
            result = num1 + num2;
            operationSymbol = '+';
            break;
          case 'pengurangan':
            num1 = generateRandomNumber(500, 999);
            num2 = generateRandomNumber(100, 499);
            result = num1 - num2;
            operationSymbol = '-';
            break;
          case 'perkalian':
            num1 = generateRandomNumber(10, 99);
            num2 = generateRandomNumber(2, 9);
            result = num1 * num2;
            operationSymbol = '×';
            break;
          case 'pembagian':
            num2 = generateRandomNumber(2, 9); // divisor
            const quotient = generateRandomNumber(10, 50);
            num1 = num2 * quotient; // dividend
            result = quotient;
            operationSymbol = '÷';
            break;
        }
        
        // Buat HTML untuk soal
        let html = `
          <div class="flex flex-col items-center">
            <div class="calculation-box text-lg mb-4">
        `;
        
        if (operation === 'pembagian') {
          html += `<div class="font-mono">${num2})${num1}</div>`;
        } else {
          html += `
            <div class="font-mono">${formatNumberWithSpaces(num1, operation === 'perkalian' ? 2 : 3)}</div>
            <div class="font-mono">${operationSymbol} ${formatNumberWithSpaces(num2, operation === 'perkalian' ? 2 : 3)}</div>
          `;
        }
        
        html += `
            <div class="calculation-line mt-1"></div>
            <div class="mt-2 flex justify-end gap-2">
        `;
        
        // Tambahkan input untuk setiap digit hasil
        const resultStr = result.toString();
        for (let i = 0; i < resultStr.length; i++) {
          html += `<input type="text" maxlength="1" size="1" class="w-8 h-8 text-center">`;
        }
        
        html += `
            </div>
          </div>
          <div id="latihan-feedback" class="mt-4 text-center"></div>
        </div>
        `;
        
        container.innerHTML = html;
        controlsElem.classList.remove('hidden');
        skorElem.classList.remove('hidden');
        
        // Setup handler untuk tombol periksa
        document.getElementById('check-latihan').onclick = function() {
          const inputs = container.querySelectorAll('input');
          let isCorrect = true;
          let userAnswer = '';
          
          // Periksa setiap digit
          for (let i = 0; i < inputs.length; i++) {
            const expectedDigit = resultStr[i];
            const userDigit = inputs[i].value;
            userAnswer += userDigit;
            
            if (userDigit === expectedDigit) {
              inputs[i].classList.add('correct');
              inputs[i].classList.remove('incorrect');
            } else {
              inputs[i].classList.add('incorrect');
              inputs[i].classList.remove('correct');
              isCorrect = false;
            }
          }
          
          const feedbackElem = document.getElementById('latihan-feedback');
          
          if (isCorrect) {
            let operationText;
            if (operation === 'penjumlahan') operationText = `${num1} + ${num2} = ${result}`;
            else if (operation === 'pengurangan') operationText = `${num1} - ${num2} = ${result}`;
            else if (operation === 'perkalian') operationText = `${num1} × ${num2} = ${result}`;
            else if (operation === 'pembagian') operationText = `${num1} ÷ ${num2} = ${result}`;
            
            feedbackElem.textContent = 'Benar! ' + operationText;
            feedbackElem.className = 'text-green-600 font-semibold';
            
            // Tambah skor
            score++;
            document.getElementById('skor').textContent = score;
          } else {
            feedbackElem.textContent = 'Belum tepat, coba lagi.';
            feedbackElem.className = 'text-red-600 font-semibold';
          }
          
          // Tambah total soal
          totalQuestions++;
          document.getElementById('total-soal').textContent = totalQuestions;
        };
        
        // Setup handler untuk tombol soal baru
        document.getElementById('new-latihan').onclick = function() {
          setupLatihan(type);
        };
      }

      // Inisialisasi semua latihan interaktif
      setupPenjumlahan();
      setupPengurangan();
      setupPerkalian();
      setupPembagian();
      
      // Tambahkan event listeners untuk tombol di latihan soal
      document.getElementById('btn-penjumlahan').addEventListener('click', function() {
        setupLatihan('penjumlahan');
      });
      
      document.getElementById('btn-pengurangan').addEventListener('click', function() {
        setupLatihan('pengurangan');
      });
      
      document.getElementById('btn-perkalian').addEventListener('click', function() {
        setupLatihan('perkalian');
      });
      
      document.getElementById('btn-pembagian').addEventListener('click', function() {
        setupLatihan('pembagian');
      });
      
      document.getElementById('btn-campuran').addEventListener('click', function() {
        setupLatihan('campuran');
      });
      
      // Smooth scrolling untuk navigasi
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 60,
              behavior: 'smooth'
            });
          }
        });
      });
    });