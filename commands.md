# 常用指令大全

<div align="center">
  <img src="https://via.placeholder.com/600x200?text=Minecraft+指令大全" alt="Minecraft指令大全" style="max-width: 100%; height: auto; border-radius: 10px; margin-bottom: 20px;">
  <p><strong>掌握指令，让游戏体验更上一层楼</strong></p>
</div>

<div style="margin-bottom: 24px; background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px;">
  <p>这里汇总了云栖谷服务器中常用的指令，特别是领地相关的指令，帮助你更好地管理和保护你的游戏区域。所有指令都需要在游戏内聊天框中输入（按 T 键打开聊天框）。</p>
  <p style="margin-top: 8px; color: #6c757d; font-size: 14px;">💡 小贴士：输入指令时，斜杠 "/" 是必须的哦！</p>
</div>

## 📜 领地指令系统

<div style="margin-bottom: 32px;">
  <p style="margin-bottom: 16px;">领地系统是保护你建筑和物品的重要工具，以下是完整的领地指令集：</p>

  ### 🏠 基本操作指令
  <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 0;">
      <thead>
        <tr style="background-color: #fff9e6;">
          <th style="border: 1px solid #ffeaa7; padding: 8px; text-align: left;">指令</th>
          <th style="border: 1px solid #ffeaa7; padding: 8px; text-align: left;">说明</th>
          <th style="border: 1px solid #ffeaa7; padding: 8px; text-align: left;">备注</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #ffeaa7; padding: 8px;"><code>/res ?</code></td>
          <td style="border: 1px solid #ffeaa7; padding: 8px;">查看帮助</td>
          <td style="border: 1px solid #ffeaa7; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ffeaa7; padding: 8px;"><code>/res create 领地名</code></td>
          <td style="border: 1px solid #ffeaa7; padding: 8px;">创建领地</td>
          <td style="border: 1px solid #ffeaa7; padding: 8px;">领地名如果在领地内可以不写，下同</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ffeaa7; padding: 8px;"><code>/res remove 领地名</code></td>
          <td style="border: 1px solid #ffeaa7; padding: 8px;">删除领地</td>
          <td style="border: 1px solid #ffeaa7; padding: 8px; color: #e74c3c;">⚠️ 不可逆，谨慎删除！</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ffeaa7; padding: 8px;"><code>/res subzone 子领地名</code></td>
          <td style="border: 1px solid #ffeaa7; padding: 8px;">创建子领地</td>
          <td style="border: 1px solid #ffeaa7; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ffeaa7; padding: 8px;"><code>/res auto 领地名 范围</code></td>
          <td style="border: 1px solid #ffeaa7; padding: 8px;">以你为中心，创建你能创建的最大领地</td>
          <td style="border: 1px solid #ffeaa7; padding: 8px;"></td>
        </tr>
      </tbody>
    </table>
  </div>

  ### 📏 区域选择指令
  <div style="background-color: #e8f5e9; border: 1px solid #c8e6c9; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 0;">
      <thead>
        <tr style="background-color: #f1f8e9;">
          <th style="border: 1px solid #c8e6c9; padding: 8px; text-align: left;">指令</th>
          <th style="border: 1px solid #c8e6c9; padding: 8px; text-align: left;">说明</th>
          <th style="border: 1px solid #c8e6c9; padding: 8px; text-align: left;">备注</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res select x y z</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">以你为中心，选取要被保护的范围</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">z/x:横轴 y:高度</td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res select size</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">显示所选区域的大小</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res select cost</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">显示已选择的领域价格</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res select auto 玩家ID</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">打开自动选择区域</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res select expand 格数</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">选区向面对的方向选择扩展数值大小</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res contract 领地 格数</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">从你面对的方向缩小领地</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px; color: #e74c3c;">⚠️ 缩小可能是从玩家背部缩小！谨慎处理！</td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res select shift 格数</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">选区向面对的方向平移</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res select vert 高度</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">扩展选取到最大高度、深度</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res select sky 高度</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">扩展到最高</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res select bedrock</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">扩展到最深</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res select chunk</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">选择目前所在区块</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"></td>
        </tr>
      </tbody>
    </table>
  </div>

  ### ⚙️ 区域管理指令
  <div style="background-color: #e3f2fd; border: 1px solid #bbdefb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 0;">
      <thead>
        <tr style="background-color: #e3f2fd;">
          <th style="border: 1px solid #bbdefb; padding: 8px; text-align: left;">指令</th>
          <th style="border: 1px solid #bbdefb; padding: 8px; text-align: left;">说明</th>
          <th style="border: 1px solid #bbdefb; padding: 8px; text-align: left;">备注</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #bbdefb; padding: 8px;"><code>/res area add [领地] [区域ID]</code></td>
          <td style="border: 1px solid #bbdefb; padding: 8px;">为领地添加物理区域</td>
          <td style="border: 1px solid #bbdefb; padding: 8px;">可以与其他领地区域重叠</td>
        </tr>
        <tr>
          <td style="border: 1px solid #bbdefb; padding: 8px;"><code>/res area remove [领地] [区域ID]</code></td>
          <td style="border: 1px solid #bbdefb; padding: 8px;">移除领地的物理区域</td>
          <td style="border: 1px solid #bbdefb; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #bbdefb; padding: 8px;"><code>/res setmain</code></td>
          <td style="border: 1px solid #bbdefb; padding: 8px;">设置脚下领地为主领地</td>
          <td style="border: 1px solid #bbdefb; padding: 8px;"></td>
        </tr>
      </tbody>
    </table>
  </div>

  ### 🔑 权限设置指令
  <div style="background-color: #fce4ec; border: 1px solid #f8bbd0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 0;">
      <thead>
        <tr style="background-color: #f8bbd0;">
          <th style="border: 1px solid #f8bbd0; padding: 8px; text-align: left;">指令</th>
          <th style="border: 1px solid #f8bbd0; padding: 8px; text-align: left;">说明</th>
          <th style="border: 1px solid #f8bbd0; padding: 8px; text-align: left;">备注</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"><code>/res padd 领地名 玩家ID</code></td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">对玩家添加权限</td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"><code>/res pdel 领地名 玩家ID</code></td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">删除玩家的基本权限</td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"><code>/res pset 领地名 玩家ID 权限名称 true/false/remove</code></td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">单独设置玩家的权限</td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">true:开 false:关 remove:移除 trusted:所有基础权限(如果要移除玩家权限推荐用remove而不是false)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"><code>/res set 领地 权限名称</code></td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">设置领地内权限</td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">也可以使用/res set打开GUI面板</td>
        </tr>
        <tr>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"><code>/res pset 玩家ID removeall</code></td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">删除一个玩家的所有权限</td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"><code>/res rename 旧名称 新名称</code></td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">重命名领地</td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"><code>/res mirror 原领地 目标领地名</code></td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">从原领地复制权限到目标领地</td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">需要你是两个领地的所有者</td>
        </tr>
        <tr>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"><code>/res gset 领地名 组名 标志 true/false/remove</code></td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">在不同的权限组里设置标志</td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #f8bbd0; padding: 8px;"><code>/res reset 领地</code></td>
          <td style="border: 1px solid #f8bbd0; padding: 8px;">将领地的所有权限重置</td>
          <td style="border: 1px solid #f8bbd0; padding: 8px; color: #e74c3c;">⚠️ 不可逆，谨慎操作！</td>
        </tr>
      </tbody>
    </table>
  </div>

  ### 🚫 黑名单管理指令
  <div style="background-color: #e0f2f1; border: 1px solid #b2dfdb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 0;">
      <thead>
        <tr style="background-color: #b2dfdb;">
          <th style="border: 1px solid #b2dfdb; padding: 8px; text-align: left;">指令</th>
          <th style="border: 1px solid #b2dfdb; padding: 8px; text-align: left;">说明</th>
          <th style="border: 1px solid #b2dfdb; padding: 8px; text-align: left;">备注</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #b2dfdb; padding: 8px;"><code>/res lset blacklist/ignorelist 物品名称</code></td>
          <td style="border: 1px solid #b2dfdb; padding: 8px;">将某物品加入黑名单，防止该物品在领地中被放置</td>
          <td style="border: 1px solid #b2dfdb; padding: 8px; color: #e74c3c;">⚠️ 慎用！</td>
        </tr>
        <tr>
          <td style="border: 1px solid #b2dfdb; padding: 8px;"><code>/res lset 领地 info</code></td>
          <td style="border: 1px solid #b2dfdb; padding: 8px;">忽略黑名单选项</td>
          <td style="border: 1px solid #b2dfdb; padding: 8px;"></td>
        </tr>
      </tbody>
    </table>
  </div>

  ### 💬 领地信息与消息设置
  <div style="background-color: #f3e5f5; border: 1px solid #e1bee7; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 0;">
      <thead>
        <tr style="background-color: #e1bee7;">
          <th style="border: 1px solid #e1bee7; padding: 8px; text-align: left;">指令</th>
          <th style="border: 1px solid #e1bee7; padding: 8px; text-align: left;">说明</th>
          <th style="border: 1px solid #e1bee7; padding: 8px; text-align: left;">备注</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #e1bee7; padding: 8px;"><code>/res message 领地 enter/leave 信息</code></td>
          <td style="border: 1px solid #e1bee7; padding: 8px;">自定义玩家进入或者离开领地的消息</td>
          <td style="border: 1px solid #e1bee7; padding: 8px;">enter:进入 leave:离开 信息可以是彩色(&)的</td>
        </tr>
        <tr>
          <td style="border: 1px solid #e1bee7; padding: 8px;"><code>/res info</code></td>
          <td style="border: 1px solid #e1bee7; padding: 8px;">查看脚下领地</td>
          <td style="border: 1px solid #e1bee7; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #e1bee7; padding: 8px;"><code>/res list 玩家ID</code></td>
          <td style="border: 1px solid #e1bee7; padding: 8px;">列出和玩家相关的领地</td>
          <td style="border: 1px solid #e1bee7; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #e1bee7; padding: 8px;"><code>/res listall</code></td>
          <td style="border: 1px solid #e1bee7; padding: 8px;">列出所有玩家领地</td>
          <td style="border: 1px solid #e1bee7; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #e1bee7; padding: 8px;"><code>/res area list 领地名称 页码</code></td>
          <td style="border: 1px solid #e1bee7; padding: 8px;">列出领地的物理区域</td>
          <td style="border: 1px solid #e1bee7; padding: 8px;"></td>
        </tr>
      </tbody>
    </table>
  </div>

  ### 📋 列表管理指令
  <div style="background-color: #fff8e1; border: 1px solid #ffecb3; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 0;">
      <thead>
        <tr style="background-color: #ffecb3;">
          <th style="border: 1px solid #ffecb3; padding: 8px; text-align: left;">指令</th>
          <th style="border: 1px solid #ffecb3; padding: 8px; text-align: left;">说明</th>
          <th style="border: 1px solid #ffecb3; padding: 8px; text-align: left;">备注</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #ffecb3; padding: 8px;"><code>/res lists</code></td>
          <td style="border: 1px solid #ffecb3; padding: 8px;">预定义的权限列表可以应用到领域上</td>
          <td style="border: 1px solid #ffecb3; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ffecb3; padding: 8px;"><code>/res lists add 列表名</code></td>
          <td style="border: 1px solid #ffecb3; padding: 8px;">添加一个列表</td>
          <td style="border: 1px solid #ffecb3; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ffecb3; padding: 8px;"><code>/res lists remove</code></td>
          <td style="border: 1px solid #ffecb3; padding: 8px;">删除一个列表</td>
          <td style="border: 1px solid #ffecb3; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ffecb3; padding: 8px;"><code>/res lists apply 列表名 领地</code></td>
          <td style="border: 1px solid #ffecb3; padding: 8px;">将列表应用于领地</td>
          <td style="border: 1px solid #ffecb3; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ffecb3; padding: 8px;"><code>/res lists set 列表名 权限 值</code></td>
          <td style="border: 1px solid #ffecb3; padding: 8px;">设置列表全局权限</td>
          <td style="border: 1px solid #ffecb3; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ffecb3; padding: 8px;"><code>/res lists pset 列表值 玩家ID 权限 值</code></td>
          <td style="border: 1px solid #ffecb3; padding: 8px;">设置列表玩家权限</td>
          <td style="border: 1px solid #ffecb3; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ffecb3; padding: 8px;"><code>/res lists view 列表名</code></td>
          <td style="border: 1px solid #ffecb3; padding: 8px;">查看列表</td>
          <td style="border: 1px solid #ffecb3; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ffecb3; padding: 8px;"><code>/res listhidden 玩家ID 页码</code></td>
          <td style="border: 1px solid #ffecb3; padding: 8px;">列出指定玩家拥有的隐藏领地</td>
          <td style="border: 1px solid #ffecb3; padding: 8px;"></td>
        </tr>
      </tbody>
    </table>
  </div>

  ### 🚀 传送相关指令
  <div style="background-color: #e8f5e9; border: 1px solid #c8e6c9; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 0;">
      <thead>
        <tr style="background-color: #c8e6c9;">
          <th style="border: 1px solid #c8e6c9; padding: 8px; text-align: left;">指令</th>
          <th style="border: 1px solid #c8e6c9; padding: 8px; text-align: left;">说明</th>
          <th style="border: 1px solid #c8e6c9; padding: 8px; text-align: left;">备注</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res tp 领地名</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">传送到指定领地</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">不填写领地名默认传送到自己领地</td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res tpset</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">设置脚下为领地传送点</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"></td>
        </tr>
        <tr>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"><code>/res unstuck</code></td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;">将自己移动到领地外</td>
          <td style="border: 1px solid #c8e6c9; padding: 8px;"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## 🎯 实用小贴士

<div style="background-color: #e3f2fd; border: 1px solid #90caf9; border-radius: 8px; padding: 20px; margin-bottom: 32px;">
  <h3 style="color: #1976d2; margin-top: 0;">💡 指令使用技巧</h3>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 8px;">🔍 <strong>快速查看帮助</strong>：输入 <code>/res ?</code> 可以随时查看所有可用的领地指令</li>
    <li style="margin-bottom: 8px;">💾 <strong>权限备份</strong>：在修改重要权限前，可以使用 <code>/res mirror</code> 指令备份当前权限设置</li>
    <li style="margin-bottom: 8px;">🎨 <strong>彩色消息</strong>：设置领地进入/离开消息时，可以使用 <code>&</code> 符号加数字或字母来添加颜色（例如 &c 红色）</li>
    <li style="margin-bottom: 8px;">⚠️ <strong>安全提示</strong>：删除领地或重置权限前，请确认你真的需要执行这些不可逆的操作</li>
  </ul>
</div>

<div style="text-align: center; margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee;">
  <p>如有其他指令需求或问题，请联系服务器管理员</p>
  <p style="font-size: 12px; color: #666; margin-top: 8px;">云栖谷服务器 Wiki &copy; 2024</p>
</div>