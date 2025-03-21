# DOM là viết tắt của Document Object Model
được tạo ra bởi trình duyệt web khi tải
 
+ DOM được tổ chức theo dạng cây (DOM tree), mỗi thành phần là một Node

+ Với javascript thông qua DOM ta có thể thao tác để:

. Truy xuất các thuộc thành phần HTML
. Thay đổi phần tử HTML
. Thay đổi style CSS
. Thay đổi thuộc tính của HTML
. Tạo phần tử và thuộc tính mới
. Tạo sự kiện
. Phản ứng các sự kiện

# DOM gồm 3 thành phần là: 
    + Element - thẻ html
    + Attribute - thuộc tính thẻ
    + Text - nội dung thẻ
    
# Các loại DOM trong javascript:
    + DOM Document: có nhiệm vụ lưu trữ các thành phần trong tài liệu 
    của website 
    + DOM element: truy xuất tới tẻ HTML nào đó thông qua các tên class,
    id, tên thẻ
    + DOM css: có nhiệm vụ thay đổi giá trị nội dung và giá trị thuộc tính
    của các thẻ HTML
    + DOM event: gán các sự kiện cho thẻ HTML
    + DOM listener: lắng nghe các sự kiện tác động vào thẻ html đó
    + DOM node: có nhiệm vụ thao tác với HTML thông qua đối tương Object

# Truy cập vào các phần tử trong DOM
+ Sử dụng: document.getElementById
  => Lấy phần tử html thông qua id của phần tử đó

+ Sử dụng: document.getElementByTagName
  => Lấy phần tử thông qua tag name (tên thẻ) và trả về danh sách các phần tử

+ Sử dụng: document.getElementsByClassName
  => Truy cập thông qua tên Class , trả về danh sách các phần tử

+ Sử dụng: document.querySelector
  => Truy cập phần tử thông quan css selector và trả về phần tử đầu tiên tìm thấy

+ Sử dụng: document.querySelectorAll 
  => Truy cấp thông qua css selector, trả về danh sách các phần tử

# Quan hệ các node trong DOM
+  Node.parentNode:  tham chiếu đến nút cha của nút hiện tại

+  Node.childNodes:  tham chiếu đến các nút con trực tiếp của nút hiện tại

+  Node.firstChild:  tham chiếu đến nút con đầu tiên của nút hiện tại

+  Node.lastChild: tham chiếu đến nút con cuối cùng của nút hiện tại

+  Node.nextSibling: tham chiếu đến nút anh em nằm liền kề sau với nút hiện tại.

+  Node.previousSibling: tham chiếu đến nút anh em nằm liền kề trước với nút hiện tại.

# Lấy và thay đổi nội dung phần tử html

+  Node.innerHTML: lấy toàn bộ nội dung bao gồm thẻ, text bên trong html
+  Node.innerText: chỉ lấy nội dung text của thẻ (không bao gồm các phần nội dung có display none)
+  Node.textContent: lấy toàn bộ nội dugn bao gồm thẻ, cả văn bản ẩn
nhưng ở dạng text

=> cả innerText và textContent đều lấy cả nội dung text của thẻ con

+ Chỉnh sửa nội dung phần tử bằng cách: gán
ex: Node.innerHTML = `...` tương tự với cả innerText và textContent

+ Việc gán với cả 3 các trên đều sẽ xóa bỏ toàn bộ nội dung bên trong ban 
đầu của thẻ đó bao gồm cả các thẻ html

# Thay đổi các thuộc tính css của phần tử
+ element.style.tên_thuộc_tính(camalCase) = "value"

# Thêm một phần tử vào Document
+ Bước 1: tạo phần tử - sử dụng hàm createElement(tagName)
ex: const p = document.createElement('p');
    p.innerText = 'The p moi duoc tao'

+ Bước 2: thêm phần tử vào dom - sử dụng các hàm sau 
  . Node.removeChild(e) xóa một phần tử
  . Node.append(...newNode): thêm một hoặc nhiều vào cuối node (newNode cso thể là văn bản thuần)
  . Node.prepend(...newNode): thêm một hoặc nhiều vào đầu node
  . Node.appendChild(newNode): chỉ thêm một node mưới vào cuối node cha
  . Node.insertBefore(newNode, childNode): thêm một phần tử mới và trước một
  phần tử con trong cha

# Khi lấy ra một element ta có thể lấy ra các firstChild, lastChild, attibutes,
... bằng các hàm có sẵn
ex: getAttribute...
ex: setAttribute...

+ element.AttributeName = '...'

+ Sử dụng hàm Node.cloneNode(deep):
  => Trả về một cloneNode của Node, deep là không bắt buộc
     . deep = true -> sao chép cả node, attributes va thành phần con
     . deep = false -> sao chép node và attibutes