## :us: Description <a name = "us"></a>
#### String.prototype.trimStart() - added in ES2019 (ES10)
The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
#### String.prototype.trimEnd() - added in ES2019 (ES10)
The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.
#### String.prototype.trim()
The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
#### String.prototype.padStart() - added in ES2017 (ES8)
The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
#### String.prototype.padEnd() - added in ES2017 (ES8)
The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
#### Tag templates
Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.

The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string.
## :ru: Описание <a name = "rus"></a>
#### String.prototype.trimStart() - added in ES2019 (ES10)
Метод trimStart() удаляет пробелы из начала строки. trimLeft() является псевдонимом этого метода.
#### String.prototype.trimEnd() - added in ES2019 (ES10)
Метод trimEnd() удаляет пробелы в конце строки. trimRight() является псевдонимом этого метода.
#### String.prototype.trim()
Метод trim() удаляет пробелы с обоих концов строки. Пробел в этом контексте - это все пробельные символы (пробел, табуляция, пробел и т. д.) И все символы конца строки (LF, CR и т. Д.).
#### String.prototype.padStart() - added in ES2017 (ES8)
Метод padStart() дополняет текущую строку другой строкой (несколько раз, если необходимо), пока результирующая строка не достигнет заданной длины. Заполнение применяется с начала текущей строки.
#### String.prototype.padEnd() - added in ES2017 (ES8)
Метод padEnd() дополняет текущую строку заданной строкой (при необходимости повторяется), чтобы полученная строка достигла заданной длины. Заполнение применяется с конца текущей строки.
#### Tag templates
Расширенной формой шаблонных литералов являются теговые шаблоны. Они позволяют разбирать шаблонные литералы с помощью функции. Первый аргумент такой функции содержит массив строковых значений, а остальные содержат выражения из подстановок. В итоге, функция должна вернуть собранную строку.