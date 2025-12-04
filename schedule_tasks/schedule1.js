const fs = require("fs");
const path = require("path");
const cron = require("node-cron");

const invoicesPath = path.join(__dirname, "invoice.json");
const archivePath = path.join(__dirname, "archive.json");

const archiveInvoiceTask = () => {
  console.log("Running archive invoices task:", new Date());

  try {
    // Read fresh invoices from file every time
    const invoices = JSON.parse(fs.readFileSync(invoicesPath, "utf-8"));

    // Filter paid and pending
    const paidInvoices = invoices.filter(item => item.status === "paid");
    const pendingInvoices = invoices.filter(item => item.status !== "paid");

    if (paidInvoices.length > 0) {
      // Save paid invoices to archive.json
      fs.writeFileSync(archivePath, JSON.stringify(paidInvoices, null, 2), "utf-8");

      // Update invoice.json with pending invoices
      fs.writeFileSync(invoicesPath, JSON.stringify(pendingInvoices, null, 2), "utf-8");

      console.log("Archived invoices:", paidInvoices);
    } else {
      console.log("No paid invoices to archive.");
    }

  } catch (err) {
    console.log("Error:", err);
  }

  console.log("Archive invoices task ended");
};

// Run every minute
cron.schedule("* * * * *", archiveInvoiceTask);
