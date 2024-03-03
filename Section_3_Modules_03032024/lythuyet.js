/**
 * * Định nghĩa Module
        An AngularJS module defines an application.

        The module is a container for the different parts of an application.

        The module is a container for the application controllers.

        Controllers always belong to a module.
 * * Biến "$scope" lúc khai báo ở bên controller ko được thay đổi
 * * You can invoke a directive by using: Element name, Attribute, Class, Comment
 *            TODO The legal restrict values are:
                     E for Element name
                     A for Attribute
                     C for Class
                     M for Comment
                     By default the value is EA, meaning that both Element names and attribute names can invoke the directive.
 * ? Nôm na thi restrict là chương sẽ xử lý và hiểu phần tử được directive đó, cụ thể như sau
       'E' (Element): Directive được áp dụng như một phần tử HTML mới.
       'A' (Attribute): Directive được áp dụng như một thuộc tính của một phần tử HTML đã tồn tại.
       'C' (Class): Directive được áp dụng như một lớp CSS của một phần tử HTML đã tồn tại.
       'M' (Comment): Directive được áp dụng như một ghi chú trong mã HTML.
*/
