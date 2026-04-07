# 自动创建求职准备文件夹结构

$basePath = "e:\2026edu\job\for offer\02-准备"

$folders = @(
    "01-基本信息",
    "02-项目经历",
    "03-JD定制",
    "04-经历深挖",
    "04-经历深挖\面试工具箱",
    "05-面试准备"
)

Write-Host "正在创建求职准备文件夹结构..." -ForegroundColor Green

foreach ($folder in $folders) {
    $fullPath = Join-Path $basePath $folder
    if (-not (Test-Path $fullPath)) {
        New-Item -Path $fullPath -ItemType Directory -Force | Out-Null
        Write-Host "✓ 已创建: $folder" -ForegroundColor Cyan
    } else {
        Write-Host "- 已存在: $folder" -ForegroundColor Gray
    }
}

Write-Host "`n✅ 文件夹结构创建完成！" -ForegroundColor Green
Write-Host "路径: $basePath" -ForegroundColor Yellow
