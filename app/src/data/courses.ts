export interface Lesson {
  id: string
  title: string
  duration: string
  content: string
  code: string
}

export interface Course {
  id: string
  title: string
  subtitle: string
  level: '入门' | '进阶' | '高级'
  color: string
  lessons: Lesson[]
}

export const courses: Course[] = [
  {
    id: 'basics',
    title: 'Python 零基础入门',
    subtitle: '从安装到写出第一段程序，掌握变量、数据类型与流程控制',
    level: '入门',
    color: 'from-emerald-500 to-teal-600',
    lessons: [
      {
        id: 'b1',
        title: '第一个 Python 程序',
        duration: '10 分钟',
        content:
          'Python 以简洁优雅著称。学习任何语言的第一步都是打印 "Hello, World!"。print() 是内置函数，可以直接把内容输出到屏幕。注释用 # 开头，好的注释习惯从第一天养成。',
        code: `# 这是你的第一个 Python 程序
print("Hello, World!")

# print 可以输出多个内容，用逗号分隔
name = "小明"
print("你好，", name, "！欢迎学习 Python")`,
      },
      {
        id: 'b2',
        title: '变量与数据类型',
        duration: '20 分钟',
        content:
          '变量是存放数据的容器，Python 是动态类型语言，无需声明类型。常用类型：int（整数）、float（浮点数）、str（字符串）、bool（布尔值）。用 type() 可以查看变量类型。',
        code: `age = 18              # int 整数
price = 9.9           # float 浮点数
name = "Python"       # str 字符串
is_easy = True        # bool 布尔值

print(type(age))      # <class 'int'>

# f-string 是推荐的字符串格式化方式
print(f"{name} 简单易学：{is_easy}，我 {age} 岁开始学")`,
      },
      {
        id: 'b3',
        title: '条件判断 if / else',
        duration: '25 分钟',
        content:
          '条件判断让程序拥有"做决定"的能力。Python 用缩进（4 个空格）表示代码块，这是强制性的语法规则。if / elif / else 组合可以处理多分支逻辑。',
        code: `score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格，继续加油！")

# 三元表达式（简洁写法）
result = "成年" if score >= 18 else "未成年"`,
      },
      {
        id: 'b4',
        title: '循环：for 与 while',
        duration: '25 分钟',
        content:
          '循环用于重复执行任务。for 循环适合遍历序列（如列表、字符串），while 循环适合按条件执行。break 跳出循环，continue 跳过本次迭代。range() 生成整数序列。',
        code: `# for 循环：打印 1 到 5
for i in range(1, 6):
    print(i)

# while 循环：猜数字直到猜对
secret = 7
guess = 0
while guess != secret:
    guess = int(input("猜一个 1-10 的数字："))
print("猜对了！")

# 遍历列表
for fruit in ["苹果", "香蕉", "橙子"]:
    print(f"我喜欢吃{fruit}")`,
      },
    ],
  },
  {
    id: 'data-structure',
    title: '核心数据结构',
    subtitle: '列表、元组、字典、集合——Python 编程的四大基石',
    level: '入门',
    color: 'from-sky-500 to-blue-600',
    lessons: [
      {
        id: 'd1',
        title: '列表 List：有序可变',
        duration: '30 分钟',
        content:
          '列表是最常用的数据结构，可以存放任意类型的元素，支持增删改查。索引从 0 开始，负数索引从末尾计数。切片是 Python 的杀手锏语法。',
        code: `fruits = ["苹果", "香蕉", "橙子", "葡萄"]

fruits.append("西瓜")      # 末尾添加
fruits.insert(1, "草莓")   # 指定位置插入
fruits.remove("香蕉")      # 删除元素

print(fruits[0])           # 第一个：苹果
print(fruits[-1])          # 最后一个：西瓜
print(fruits[1:3])         # 切片：['草莓', '橙子']
print(len(fruits))         # 长度`,
      },
      {
        id: 'd2',
        title: '字典 Dict：键值对',
        duration: '30 分钟',
        content:
          '字典以"键: 值"形式存储数据，查询速度极快。键必须是不可变类型（字符串、数字等）。字典是现实数据建模的利器，JSON 就是基于键值对结构。',
        code: `student = {
    "name": "小红",
    "age": 20,
    "skills": ["Python", "英语"]
}

print(student["name"])            # 小红
print(student.get("grade", "未知"))  # 安全取值

student["age"] = 21               # 修改
student["city"] = "北京"           # 新增

for key, value in student.items():
    print(f"{key}: {value}")`,
      },
      {
        id: 'd3',
        title: '元组与集合',
        duration: '20 分钟',
        content:
          '元组（tuple）创建后不可修改，适合存放固定数据（如坐标）。集合（set）自动去重且无序，支持交并差运算，是处理重复数据的好帮手。',
        code: `# 元组：不可变
point = (3, 5)
x, y = point          # 解包
print(f"坐标：({x}, {y})")

# 集合：自动去重
nums = {1, 2, 2, 3, 3, 3}
print(nums)           # {1, 2, 3}

a = {1, 2, 3}
b = {2, 3, 4}
print(a & b)          # 交集 {2, 3}
print(a | b)          # 并集 {1, 2, 3, 4}
print(a - b)          # 差集 {1}`,
      },
      {
        id: 'd4',
        title: '列表推导式',
        duration: '20 分钟',
        content:
          '列表推导式是 Python 最具特色的语法之一，用一行代码完成"遍历 + 加工 + 生成新列表"，让代码简洁且富有表达力。还支持条件过滤。',
        code: `# 普通写法：生成平方数列表
squares = []
for i in range(10):
    squares.append(i ** 2)

# 推导式写法：一行搞定
squares = [i ** 2 for i in range(10)]

# 带条件：只保留偶数的平方
even_squares = [i ** 2 for i in range(10) if i % 2 == 0]

# 字典推导式也可以
d = {c: ord(c) for c in "abc"}
print(d)   # {'a': 97, 'b': 98, 'c': 99}`,
      },
    ],
  },
  {
    id: 'function-oop',
    title: '函数与面向对象',
    subtitle: '学会组织代码：函数封装、参数技巧、类与对象',
    level: '进阶',
    color: 'from-violet-500 to-purple-600',
    lessons: [
      {
        id: 'f1',
        title: '定义与调用函数',
        duration: '25 分钟',
        content:
          '函数是可复用的代码块，用 def 定义。参数可以有默认值，return 返回结果。好的函数只做好一件事，命名清晰，像一句可执行的注释。',
        code: `def greet(name, greeting="你好"):
    """打招呼函数，docstring 用于说明"""
    return f"{greeting}，{name}！"

print(greet("小李"))                 # 你好，小李！
print(greet("王总", greeting="早上好"))  # 关键字参数

# 返回多个值（实际是元组）
def get_stats(nums):
    return max(nums), min(nums), sum(nums) / len(nums)

high, low, avg = get_stats([80, 95, 60, 72])`,
      },
      {
        id: 'f2',
        title: '灵活参数 *args 与 **kwargs',
        duration: '20 分钟',
        content:
          '*args 接收任意多个位置参数（打包为元组），**kwargs 接收任意多个关键字参数（打包为字典）。这是写通用函数和装饰器的必备技巧。',
        code: `def add(*args):
    """求任意多个数的和"""
    return sum(args)

print(add(1, 2))          # 3
print(add(1, 2, 3, 4, 5)) # 15

def show_info(**kwargs):
    for k, v in kwargs.items():
        print(f"{k} = {v}")

show_info(name="小张", age=25, city="上海")`,
      },
      {
        id: 'f3',
        title: '类与对象',
        duration: '35 分钟',
        content:
          '面向对象编程（OOP）把数据和操作封装在一起。class 定义类，__init__ 是构造方法，self 指向实例本身。类让复杂程序的建模更贴近现实世界。',
        code: `class Dog:
    def __init__(self, name, age):
        self.name = name   # 实例属性
        self.age = age

    def bark(self):        # 实例方法
        return f"{self.name}：汪汪！"

    def __str__(self):     # 打印对象时的显示
        return f"Dog({self.name}, {self.age}岁)"

dog = Dog("旺财", 3)
print(dog.bark())
print(dog)`,
      },
      {
        id: 'f4',
        title: '继承与多态',
        duration: '25 分钟',
        content:
          '继承让子类复用父类的代码并扩展新功能，super() 调用父类方法。多态指不同对象对同一方法有不同实现，让程序更易扩展。',
        code: `class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Cat(Animal):
    def speak(self):       # 重写父类方法
        return f"{self.name}：喵~"

class Dog(Animal):
    def speak(self):
        return f"{self.name}：汪！"

# 多态：同一接口，不同行为
for animal in [Cat("咪咪"), Dog("旺财")]:
    print(animal.speak())`,
      },
    ],
  },
  {
    id: 'practical',
    title: '实战技能',
    subtitle: '文件操作、异常处理、模块与第三方库，写出真正的项目',
    level: '进阶',
    color: 'from-amber-500 to-orange-600',
    lessons: [
      {
        id: 'p1',
        title: '异常处理 try / except',
        duration: '20 分钟',
        content:
          '程序运行难免出错，异常处理让程序"优雅地失败"而不是崩溃。try 包裹可能出错的代码，except 捕获指定异常，finally 无论是否出错都会执行。',
        code: `def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("错误：除数不能为 0")
        return None
    except TypeError as e:
        print(f"类型错误：{e}")
        return None
    else:
        return result      # 没有异常时执行
    finally:
        print("计算结束")   # 总会执行

print(divide(10, 2))   # 5.0
print(divide(10, 0))   # None`,
      },
      {
        id: 'p2',
        title: '文件读写',
        duration: '25 分钟',
        content:
          '用 open() 打开文件，推荐 with 语句自动管理资源（无需手动 close）。read 读、write 写、append 追加。处理 JSON 数据用 json 模块，是实际开发最高频的操作之一。',
        code: `import json

# 写入文件（with 自动关闭）
with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("第一行\\n第二行")

# 读取文件
with open("notes.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# JSON 存取（数据交换的通用格式）
data = {"name": "小赵", "scores": [90, 85]}
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)`,
      },
      {
        id: 'p3',
        title: '模块与第三方库',
        duration: '25 分钟',
        content:
          'Python 的强大在于生态：标准库开箱即用，第三方库用 pip 安装。import 导入模块，from ... import 导入指定成员。requests 发网络请求是最常见的实战场景。',
        code: `# 标准库示例
import math
import random
from datetime import datetime

print(math.sqrt(16))             # 4.0
print(random.randint(1, 100))    # 随机数
print(datetime.now().strftime("%Y-%m-%d"))

# 安装第三方库：pip install requests
import requests
resp = requests.get("https://api.github.com")
print(resp.status_code)   # 200
print(resp.json())        # 解析 JSON`,
      },
      {
        id: 'p4',
        title: '综合实战：单词统计器',
        duration: '40 分钟',
        content:
          '把前面学到的知识串起来：读取文本文件、用字典统计词频、按出现次数排序、输出前 10 名高频词。这是一个真实可用的迷你项目。',
        code: `from collections import Counter

def top_words(filename, top_n=10):
    with open(filename, "r", encoding="utf-8") as f:
        text = f.read().lower()

    words = text.split()
    counter = Counter(words)      # 一行完成词频统计

    print(f"共 {sum(counter.values())} 个词，"
          f"不重复 {len(counter)} 个")
    for word, count in counter.most_common(top_n):
        print(f"{word:>12} : {'█' * count} {count}")

top_words("article.txt")`,
      },
    ],
  },
  {
    id: 'advanced',
    title: '高级进阶',
    subtitle: '装饰器、生成器、并发编程，向资深 Python 工程师迈进',
    level: '高级',
    color: 'from-rose-500 to-red-600',
    lessons: [
      {
        id: 'a1',
        title: '装饰器 Decorator',
        duration: '35 分钟',
        content:
          '装饰器本质上是一个"包装函数"，在不修改原函数代码的前提下为其增加功能（如计时、日志、权限校验）。@ 语法糖让使用极其优雅。',
        code: `import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} 耗时 "
              f"{time.time() - start:.4f} 秒")
        return result
    return wrapper

@timer
def slow_task():
    time.sleep(0.5)
    return "完成"

slow_task()   # slow_task 耗时 0.500x 秒`,
      },
      {
        id: 'a2',
        title: '生成器与迭代器',
        duration: '30 分钟',
        content:
          '生成器用 yield 关键字，"用多少产多少"，不会一次性把数据载入内存，是处理大数据的利器。生成器表达式是把 [] 换成 () 的推导式。',
        code: `def fibonacci(n):
    """生成前 n 个斐波那契数"""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num, end=" ")   # 0 1 1 2 3 5 8 ...

# 生成器表达式：处理大文件不占内存
total = sum(len(line) for line in open("big.txt"))`,
      },
      {
        id: 'a3',
        title: '常用高阶函数',
        duration: '25 分钟',
        content:
          'map、filter、sorted、lambda 匿名函数是函数式编程风格的常用工具。配合推导式灵活使用，能让数据处理代码极具表达力。',
        code: `students = [
    {"name": "张三", "score": 88},
    {"name": "李四", "score": 95},
    {"name": "王五", "score": 72},
]

# 按分数排序（lambda 定义排序键）
ranked = sorted(students,
                key=lambda s: s["score"], reverse=True)

# map：提取所有名字
names = list(map(lambda s: s["name"], students))

# filter：筛选及格的学生
passed = list(filter(lambda s: s["score"] >= 80, students))

print(ranked[0]["name"])  # 李四
print(names)`,
      },
      {
        id: 'a4',
        title: '并发入门：线程与协程',
        duration: '40 分钟',
        content:
          'I/O 密集型任务（网络请求、文件读写）用并发可大幅提升效率。threading 适合传统多线程，asyncio 协程是 Python 现代并发的主流方案，async/await 语法直观。',
        code: `import asyncio

async def fetch(name, seconds):
    print(f"开始下载 {name}")
    await asyncio.sleep(seconds)   # 模拟网络请求
    print(f"{name} 完成！")
    return name

async def main():
    # 三个任务并发执行，总耗时约 3 秒而非 6 秒
    await asyncio.gather(
        fetch("文件A", 3),
        fetch("文件B", 2),
        fetch("文件C", 1),
    )

asyncio.run(main())`,
      },
    ],
  },
]

export const learningPath = [
  {
    stage: '第一阶段',
    title: '打好基础',
    weeks: '第 1-2 周',
    desc: '安装环境，掌握变量、数据类型、条件与循环，能写出简单的小程序。',
    skills: ['print 与输入', '变量与类型', 'if 条件', 'for / while 循环'],
  },
  {
    stage: '第二阶段',
    title: '玩转数据',
    weeks: '第 3-4 周',
    desc: '熟练运用列表、字典等四大数据结构，学会用推导式写出 Pythonic 代码。',
    skills: ['列表与切片', '字典操作', '集合运算', '推导式'],
  },
  {
    stage: '第三阶段',
    title: '组织代码',
    weeks: '第 5-7 周',
    desc: '用函数封装逻辑，用类建模现实世界，掌握异常处理和文件操作。',
    skills: ['函数与参数', '类与继承', '异常处理', '文件读写'],
  },
  {
    stage: '第四阶段',
    title: '实战进阶',
    weeks: '第 8-10 周',
    desc: '使用第三方库开发项目，学习装饰器、生成器与并发编程。',
    skills: ['pip 与第三方库', '装饰器', '生成器', 'asyncio 并发'],
  },
]

export const resources = [
  { name: 'Python 官方文档', url: 'https://docs.python.org/zh-cn/3/', desc: '权威中文文档，查漏补缺首选' },
  { name: 'LeetCode', url: 'https://leetcode.cn/', desc: '刷算法题，锻炼编程思维' },
  { name: 'PyPI', url: 'https://pypi.org/', desc: '40 万+ 第三方库的大本营' },
  { name: '菜鸟教程', url: 'https://www.runoob.com/python3/python3-tutorial.html', desc: '快速查阅语法的好帮手' },
  { name: 'Real Python', url: 'https://realpython.com/', desc: '高质量英文教程（进阶）' },
  { name: 'Python Tutor', url: 'https://pythontutor.com/', desc: '可视化代码执行过程，新手神器' },
]

export const totalLessons = courses.reduce((sum, c) => sum + c.lessons.length, 0)
