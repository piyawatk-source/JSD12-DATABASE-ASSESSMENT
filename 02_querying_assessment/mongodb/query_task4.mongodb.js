// Task 4: Total Revenue Summary
// At the end of the trading period, the owner wants a single figure that shows how much revenue
// the truck has generated across all recorded orders. This number will be used in their
// financial summary report, so the result should be returned as a single value named total_revenue.
//
// Hint: Write an aggregation query on the orders collection to calculate the total revenue from all orders combined.
// The result should be a single document with a field named total_revenue.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task4_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// 1.order มี field "total_price" บอกราคารวมของ order นั้นๆ
// 2.ต้องการบวกรวมทุก total_price เข้าด้วยกัน
// - ใช้ .aggregate() เพื่อทำการรวมข้อมูล
// stage 1: ใช้ $group เพื่อรวมข้อมูลทั้งหมดเข้าด้วยกัน (_id: null) แล้ว $sum total_price เพื่อคำนวณยอดรวม
// stage 2: ใช้ $project ซ่อน _id ออกแสดงแค่ total_revenue
// ---------------------------------------------------------------

use("chrome-burger-db");

db.getCollection("orders").aggregate([
  {
    $group: {
      _id: null,
      total_revenue: { $sum: "$total_price" },
    },
  },
  {
    $project: {
      _id: 0,
      total_revenue: 1,
    },
  },
]);
