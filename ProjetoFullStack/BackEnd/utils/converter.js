const { format, parse } = require('date-fns');

class Converter {
 
    frontToMySQL(dateStr) {
        try {
            // Primeiro, tentar parsear a data no formato DD/MM/YYYY
            let parsedDate = parse(dateStr, 'dd/MM/yyyy', new Date());
    
            // Se a data original for no formato YYYY-MM-DD, tentamos novamente
            if (isNaN(parsedDate)) {
                parsedDate = parse(dateStr, 'yyyy-MM-dd', new Date());
            }
    
            if (!isNaN(parsedDate)) {
                return format(parsedDate, 'yyyy-MM-dd HH:mm:ss');
            } else {
                throw new Error('Formato de data inválido.');
            }
        } catch (error) {
            return error.message;
        }
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
