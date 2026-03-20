// Task 1: Budget Meal Deal
// The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
// which menu items could be included. To qualify, an item must be priced under $10.00,
// so they can offer good value without cutting too deep into margins.
//
// Hint: Write a query to find all menu items in the menu_items collection that have a price less than 10.00.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task1_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// 1.ถ้าต้องการหาเมนูราคาต่ำกว่า $10.00 เราต้องใช้ collection ที่ชื่อว่า menu_items เพราะมันเก็บข้อมูลเกี่ยวกับเมนูอาหาร
// 2.เราจะใช้คำสั่ง .find() เพื่อค้นหาเอกสารที่มีเงื่อนไข price < 10.00
// 3.เราจะใช้ตัวกรอง { price: { $lt: 10.00 } } เพื่อระบุเงื่อนไขในการค้นหา
// 4.ผลลัพธ์ที่ได้จะเป็นรายการเมนูที่มีราคาต่ำกว่า $10.00 ซึ่งสามารถนำไปทำโปรโมชั่น เพื่อโปรโมทเมนูราคาประหยัดได้
// ---------------------------------------------------------------

use("chrome-burger-db");

db.getCollection("menu_items").find({ price: { $lt: Decimal128("10.00") } });
