/**
 * * ng-app: khởi tạo ứng dụng
 * * ng-init: khởi tạo giá trị bằng cách viết trực tiếp vào khôi HTMl
 * * ng-model: truyền giá trị vào giá trị thẻ input, textarea, select
 *      TODO tác dụng của ng-model
        Provide type validation for application data (number, email, required).
        Provide status for application data (invalid, dirty, touched, error).
        Provide CSS classes for HTML elements.
        Bind HTML elements to HTML forms.
 * * ng-repeat: foreach Arr
 * * method ".directive" giống "data-set" của JS thuần (xem lại ở bài 3). Tiện ôn lại "restrict" lôn nhá 😘
 *             TODO The legal restrict values are:
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
