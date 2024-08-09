const { format, parse,  isValid } = require('date-fns');

class Converter {

    convertToMySQLDateTimeFormat(dateTimeLocalString) {
        const [date, time] = dateTimeLocalString.split('T');
        const formattedDateTime = `${date} ${time}:00`; // Adiciona os segundos
        return formattedDateTime;
      }

    toMySQLDate(dateInput = new Date()) {
        let date;
    
        // Verificar se a entrada é uma instância de Date
        if (dateInput instanceof Date) {
            date = dateInput;
        } else if (typeof dateInput === 'string') {
            // Tentar criar um objeto Date a partir da string
            date = new Date(dateInput);
            
            // Verificar se a data criada é inválida
            if (isNaN(date.getTime())) {
                throw new Error('Formato de data inválido.');
            }
        } else {
            throw new Error('Entrada deve ser uma string ou um objeto Date.');
        }
    
        // Formatar a data no formato YYYY-MM-DD HH:MM:SS
        return format(date, 'yyyy-MM-dd HH:mm:ss');
    }
    
    
    
    mySQLToFront(dateStr) {
        try {
            // Parse a data do formato MySQL
            let parsedDate = parse(dateStr, 'yyyy-MM-dd HH:mm:ss', new Date());

            // Se o tempo estiver no formato sem segundos, tentamos parsear novamente
            if (isNaN(parsedDate)) {
                parsedDate = parse(dateStr, 'yyyy-MM-dd', new Date());
            }

            if (!isNaN(parsedDate)) {
                return format(parsedDate, 'dd/MM/yyyy');
            } else {
                throw new Error('Formato de data inválido.');
            }
        } catch (error) {
            return error.message;
        }
    }

    convertToBrazilianDate(dateStr) {
        try {
            let [year, month, day] = dateStr.split('-');
            if (year && month && day) {
                return `${day}/${month}/${year}`;
            }
            throw new Error("Formato de data inválido.");
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = new Converter();
