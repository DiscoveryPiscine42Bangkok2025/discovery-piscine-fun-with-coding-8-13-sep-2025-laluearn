let ft_list = document.getElementById("ft_list");

const remove = (node, cookieName) => {
  const check = confirm("Do you want to delete");
  if (check) {
    node.remove();
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }
};

const createTodoElement = (text, cookieName) => {
  let node = document.createElement("div");
  node.onclick = () => remove(node, cookieName);
  node.innerHTML = text;
  return node;
};

const loadTodosFromCookies = () => {
  const check = document.cookie;
  if (check.length > 0) {
    const cookies = check.split(";");
    cookies.forEach((element) => {
      const [name, value] = element.split("=");
      if (value) {
        const node = createTodoElement(value, name);
        ft_list.prepend(node);
      }
    });
  }
};

const create = () => {
  let text = prompt("Please Enter TODO LIST :");
  if (text && text.trim() !== "") {
    const name = new Date().getTime();
    document.cookie = `${name}=${text}`;
    const node = createTodoElement(text, name);
    ft_list.prepend(node);
  }
};

loadTodosFromCookies();