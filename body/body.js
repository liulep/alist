document.write("<!--延迟加载-->");
document.write("<!--如果要写自定义内容建议都加到这个延迟加载的范围内-->");
document.write("<div id=\"customize\" style=\"display: none;\">");
document.write("  <div>");
document.write("    <center class=\"dibu\">");
document.write("      <div style=\"font-size: 16px;\">");
document.write("        <span class=\"nav-item\">");
document.write("          <a class=\"nav-link\" href=\"mailto:2422669375@qq.com\" target=\"_blank\">");
document.write("            <i class=\"fa-duotone fa-envelope-open\" style=\"color:#409EFF\" aria-hidden=\"true\">");
document.write("            <\/i>");
document.write("            邮箱 |");
document.write("          <\/a>");
document.write("        <\/span>");
document.write("        <span class=\"nav-item\">");
document.write("          <a class=\"nav-link\" href=\"https:\/\/github.com\/liulep\" target=\"_blank\">");
document.write("            <i class=\"fas fa-edit\" style=\"color:#409EFF\" aria-hidden=\"true\">");
document.write("            <\/i>");
document.write("            github |");
document.write("          <\/a>");
document.write("        <\/span>");
document.write("        <span class=\"nav-item\">");
document.write("          <a class=\"nav-link\" href=\"http:\/\/pan.liulep.com\" target=\"_blank\">");
document.write("            <i class=\"fa fa-cloud-download\" style=\"color:#409EFF;\" aria-hidden=\"true\">");
document.write("            <\/i>");
document.write("            云盘 |");
document.write("          <\/a>");
document.write("        <\/span>");
document.write("        <!--后台入口-->");
document.write("        <span class=\"nav-item\">");
document.write("          <a class=\"nav-link\" href=\"\/@manage\" target=\"_blank\">");
document.write("            <i class=\"fa-solid fa-folder-gear\" style=\"color:#409EFF;\" aria-hidden=\"true\">");
document.write("            <\/i>");
document.write("            管理 |");
document.write("          <\/a>");
document.write("        <\/span>");
document.write("        <!--版权，请尊重作者-->");
document.write("        <span class=\"nav-item\">");
document.write("          <a class=\"nav-link\" href=\"https:\/\/github.com\/Xhofe\/alist\" target=\"_blank\">");
document.write("            <i class=\"fa-solid fa-copyright\" style=\"color:#409EFF;\" aria-hidden=\"true\">");
document.write("            <\/i>");
document.write("            Alist");
document.write("          <\/a>");
document.write("        <\/span>");
document.write("      <\/div>");
document.write("      <br \/>");
document.write("      <!--添加备案信息-->");
document.write("      <span class=\"nav-item\">");
document.write("        <a class=\"nav-link\" href=\"https:\/\/beian.miit.gov.cn\/#\/Integrated\/index\" target=\"_blank\">");
document.write("          <i class=\"fa-solid fa-shield-check\" style=\"color:#409EFF;\" aria-hidden=\"true\">");
document.write("          <\/i>");
document.write("          ©2023 liulep · 湘ICP备2022008118号");
document.write("        <\/a>");
document.write("      <\/span>");
document.write("    <\/center>");
document.write("    <br \/>");
document.write("    <br \/>");
document.write("  <\/div>");
document.write("  <!--延迟加载范围到这里结束-->");
document.write("<\/div>");
document.write("<!--延迟加载配套使用JS-->");
document.write("<script>");
document.write("  let interval = setInterval(() => {");
document.write("    if (document.querySelector(\".footer\")) {");
document.write("      document.querySelector(\"#customize\").style.display = \"\";");
document.write("      clearInterval(interval);");
document.write("    }");
document.write("  }, 200);");
document.write("<\/script>");