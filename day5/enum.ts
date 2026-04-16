enum Direction {
    Left,
    Right,
    Up,
    Down
}

let dir : Direction;

dir = Direction.Left;
if (dir === 0) {
    console.log("Moving left");
}
if (dir === Direction.Left) {
    console.log("Moving left");
}

// enumを使うことで、特定の値の集合を表現することができる
// 例えば、使用できるHTTPメソッドやHTTPステータスコードなどを表すenumを定義することで、
// コードの可読性や保守性を向上させることができる
enum AllowedHttpMethods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
enum HttpStatus {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
}

// ブログシステムのユーザーロールを表すenum
enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

const canEdit = (role: UserRole) : boolean => {
    return role === UserRole.Admin || role === UserRole.Editor;
}

const showEditPage = (role: UserRole) : void => {
    if (canEdit(role)) {
        // 編集ページを表示する処理
    } else {
        // 403 Forbiddenエラーを返す処理
    }
}
showEditPage(UserRole.Admin); // You can edit this page.
