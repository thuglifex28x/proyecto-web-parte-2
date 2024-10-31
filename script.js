document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

/* CSS adicional para modo claro */
const lightModeStyles = `
    body.light-mode {
        background-color: #f2f2f2;
        color: #333;
    }
    body.light-mode header, body.light-mode footer {
        background-color: #e0e0e0;
    }
    body.light-mode .product-item {
        background-color: #fff;
        color: #333;
    }
    body.light-mode nav a {
        color: #333;
    }
    body.light-mode .button {
        background-color: #333;
        color: #fff;
    }
`;

let styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = lightModeStyles;
document.head.appendChild(styleSheet);
