mySql相关软件
    mysql server  数据存储和服务
    mysql workbench 可视化的msql管理工具 方便操作存储的数据

sql 语句 and where 子句：

    查询：select 

        --  sql 注释用 --
        --  通过 * 把users表名称所有数据查询出来
        --  select * from users
        --  通过列名称 把users数据查询出来  多个列名称用逗号分割
        --  select username,password from users

    插入一条数据：多个列名用逗号分割

        --  向users插入一条数据  insert into 表名 (列名，列名)  values (value1,value2)
        --  insert into users (username,password) values ('tony','098123')

    更新一条数据，或者多个列名 用逗号分割：

        --  将 id 为 4 的用户 密码更新为 88888
        --  update users set password='888' where id = 3
        --  将 id 为 2 的用户 密码更新为 admin123,用户状态更新为1
        --  update users set password='admin123',status = 1 where id = 2

    删除指定数据：

        --  删除时候一定要加 where 限定条件 否则整个表的数据都会被清空
        --  删除 users 表中 id 为 3 的用户 
        --  delete from users where id = 3      

    where 子句：

        -- where 子句用于限定选择的标准 在select update delete 语句中，皆可使用。

        selete 列名称 from 表名称 where 列 运算符 值
        update 表名称 set 列=值 where 列 运算符 值
        delete from 表名称 where 列 运算符 值

        -- 演示 where 子句的使用 <> 表示 != 两者皆可
        -- select * from users where status=1 
        -- select * from users where id>1 
        -- select * from users where password<>'admin123' 
    
    sql的 and 和 or 运算符：

        -- 演示and和or的使用
        -- select * from users where id=1 and username='zhangsan' 
        -- select * from users where status=1 or username='zhangsan'

    order by 语句： 

        order by 语句用于根据指定列对结果进行排序

        -- 演示order by 排序 对users表中的数据 按照status字段进行升序排序 asc 默认不写asc也是升序
        -- select * from users order by status  
        -- 演示 order by 降序 按照 id 字段  desc
        -- select * from users order by id desc

        多重排序：

        -- 对users 表中的数据 先按照status进行降序排序，再按照username字母的顺序，进行升序排序 也叫多重排序alter
        -- select * from users order by status desc , username asc
    
    SQL count(*) 用于返回查询结果的总数据条数

        -- 查询users表中的status为0的总条数数据alter
        -- select count(*) from users where status = 0  

    使用as为列名设置别名：

        -- 使用as关键字为列名设置别名
        -- select username as uname,password as upwd from users