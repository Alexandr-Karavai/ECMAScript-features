## :us: Description <a name = "us"></a>
#### Protected fields
Indicates that _power should not be used directly outside the class, but this is just a convention; in reality, this is not a private property, and this semantics is not defined in the language itself.
#### Protected fields can be inherited
If we inherit the MegaMachine extends CoffeeMachine class, nothing will stop us from accessing this._waterAmount or this._power from the methods of the new class.
#### Private instance field
Private instance fields are declared with # names ( pronounced "hash names"), which are identifiers prefixed with #. The # is a part of the name itself and is used for declaration and accessing as well.  The encapsulation is enforced by the language. It is a syntax error to refer to # names not in scope.
#### Private static methods
Like their public equivalent, private static methods are called on the class, not instances of the class. Like private static fields, they are only accessible from inside the class declaration.

Private static methods may be generator, async and async generator functions.
#### Private instance methods
Private instance methods are methods available on class instances whose access is restricted in the same manner as private instance fields.
## :ru: Описание <a name = "rus"></a>
#### Защищённые поля
Обозначает, что _power не должен использоваться напрямую вне класса, но это просто соглашение; в действительности это не приватное свойство, а эта семантика не определена в самом языке.
#### Защищённые поля могут быть унаследованы
Если мы унаследуем class MegaMachine extends CoffeeMachine, ничто не помешает нам обращаться к this._waterAmount или this._power из методов нового класса.
#### Приватные поля
Приватные свойства и методы должны начинаться с #. Они доступны только внутри класса.
#### Приватные статические методы 
Как и их открытый эквивалент, приватные статические методы вызываются в классе, а не в экземплярах класса. Как и приватные статические поля, они доступны только внутри объявления класса. 

Приватные статические методы могут быть функциями генератора, асинхронного и асинхронного генератора.
#### Приватные методы экземпляра 
Приватные методы экземпляра - это методы, доступные в экземплярах классов, доступ к которым ограничен так же, как и в полях частного экземпляра.