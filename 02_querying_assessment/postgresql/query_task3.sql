-- Task 3: Staff Performance Review
-- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- To decide fairly, they want to see how many orders each staff member has processed,
-- with the busiest staff member appearing at the top of the list.
--
-- Hint: Write a query to find the total number of orders processed by each staff member.
-- The result should show the staff member's full name (concatenated) and their total order count,
-- ordered by the count in descending order.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- 1.ข้อมูลอยู่
-- - table "Staff" มีข้อมูลชื่อพนักงาน
-- - table "Orders" มีข้อมูลที่พนักงานรับออเดอร์
-- - สอง table นี้น่าจะเชื่อมกันด้วย staff_id
-- 2.นับ orders ของพนักงานแต่ละคน ใช้ COUNT() และ GROUP BY
-- - รวมชื่อ first_name + last_name เป็น full name
-- - เรียงลำดับ จากมากไปน้อย ใช้ ORDER BY DESC
-- 3.SQL concepts
-- - JOIN: เชื่อม Staff กับ Orders ผ่าน staff_id
-- - CONCAT(): รวม string เข้าด้วยกัน เพื่อแสดงชื่อเต็ม
-- - COUNT(): นับจำนวนแถว
-- - GROUP BY: จัดกลุ่มผลลัพธ์ตามพนักงานแต่ละคน
-- - ORDER BY DESC: เรียงจากมากไปน้อย
-- ---------------------------------------------------------------

SELECT
  CONCAT(s.first_name, ' ', s.last_name) AS full_name,
  COUNT(o.order_id) AS total_orders
FROM Staff s
JOIN Orders o ON s.staff_id = o.staff_id
GROUP BY s.staff_id, s.first_name, s.last_name
ORDER BY total_orders DESC;