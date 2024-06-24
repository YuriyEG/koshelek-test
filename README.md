Необходимо написать функциональный React-компонент, содержащий два поля ввода: доллары и евро, подписи к ним: USD и EUR.


Подписи к полям должны располагаться над полями ввода, при отображении компонента на широком экране (компьютер, планшет) поля должны находиться горизонтально относительно друг-друга, при отображении на экране телефона - вертикально.
При вводе значения пользователем в одно из полей автоматически пересчитывать значение второго, предусмотреть валидацию вводимых данных. 
Курс обмена EUR/USD принять равным 1.07.
В качестве стейт менеджера допускается использование Zustand, MobX, Redux (хранить данные через useState в данном тестовом задании не приветствуется).