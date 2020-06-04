## :us: Description <a name = "us"></a>
#### Nullish coalescing operator (??) - added in ES2020 (ES11)
The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

Contrary to the logical OR (||) operator, the left operand is returned if it is a falsy value which is not null or undefined. In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable (eg. '' or 0). 
#### The optional chaining operator (?.) - added in ES2020 (ES11)
The optional chaining operator ?. permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. The ?. operator functions similarly to the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.
## :ru: Описание <a name = "rus"></a>
#### Нулевой оператор объединения (??) - added in ES2020 (ES11)
Нулевой оператор объединения (??) - это логический оператор, который возвращает свой правый операнд, когда его левый операнд равен нулю или не определен, и иначе возвращает свой левый операнд. 

В отличие от логического оператора OR (||), левый операнд возвращается, если это ложное значение, которое не является нулевым или неопределенным. Другими словами, если вы используете || чтобы предоставить какое-либо значение по умолчанию другой переменной foo, вы можете столкнуться с неожиданным поведением, если вы считаете некоторые ложные значения пригодными для использования (например, '' или 0).

#### Необязательный оператор цепочки (?.) - added in ES2020 (ES11)
Необязательный оператор цепочки (?.) Позволяет считывать значение свойства, расположенного глубоко в цепочке связанных объектов, без необходимости явно проверять правильность каждой ссылки в цепочке. Оператор (?.) Работает аналогично оператору цепочки (.), За исключением того, что вместо того, чтобы вызывать ошибку, если ссылка является нулевой (нулевой или неопределенный), выражение замыкается с возвращаемым значением undefined. При использовании с вызовами функций возвращает неопределенное значение, если данная функция не существует.