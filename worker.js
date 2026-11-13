export default {
  async fetch(request, env, ctx) {
    const htmlContent = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Canvas on Cloudflare Workers</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #0f172a;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }
        canvas {
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <canvas id="myCanvas" width="800" height="600"></canvas>
    <script>
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');

        // 示例：简单的 Canvas 动画或渲染逻辑
        function draw() {
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#38bdf8';
            ctx.font = 'bold 32px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Hello Cloudflare Workers!', canvas.width / 2, canvas.height / 2);
        }

        draw();
    </script>
</body>
</html>
    `;

    return new Response(htmlContent, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  },
};
