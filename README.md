# 个人介绍(introduction)
name: Latest blog post workflow
on:
  schedule: # Run workflow automatically
    - cron: '0 */2 * * *' # Runs every hour, on the hour
  workflow_dispatch: # Run workflow manually (without waiting for the cron to be called), through the GitHub Actions Workflow page directly
permissions:
  contents: write # To write the generated contents to the readme

jobs:
  update-readme-with-blog:
    name: Update this repo's README with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Pull in blog's posts
        uses: gautamkrishnar/blog-post-workflow@v1
        with:
          feed_list: "http://littledai.cn/atom.xml"

## 统计
![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=littledyc)
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=littledyc)
![trophy](https://github-profile-trophy.vercel.app/?username=littledyc)
