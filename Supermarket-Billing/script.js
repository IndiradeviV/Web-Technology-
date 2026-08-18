        // Calculate price of one product

        function calculateProductTotal(quantity, price) {

            return quantity * price;

        }

        // Generate Complete Bill

        function generateBill() {

            // Variables and Data Types
            let quantities = [];
            let prices = [];
            let productTotal = [];
            let total = 0;
            let discount = 0;
            let finalAmount = 0;
 
            // ITERATION STATEMENT
            // Read quantity and price

            for (let i = 0; i < 3; i++) {

                quantities[i] = Number(
                    document.getElementById(
                        "quantity" + (i + 1)
                    ).value
                );

                prices[i] = Number(
                    document.getElementById(
                        "price" + (i + 1)
                    ).value
                );


                // Call user-defined function
                productTotal[i] =
                    calculateProductTotal(
                        quantities[i],
                        prices[i]
                    );
                total = total + productTotal[i];
            }
            // Apply 10% discount if total > ₹2000

            if (total > 2000) {

                discount = total * 10 / 100;

            }
            else {

                discount = 0;

            }


            // Calculate final amount
            finalAmount = total - discount;

            // DISPLAY BILL

            document.getElementById("bill").innerHTML =

                "<h2>Bill Summary</h2>" +

                "<p>Product 1: ₹" +
                productTotal[0].toFixed(2) +
                "</p>" +

                "<p>Product 2: ₹" +
                productTotal[1].toFixed(2) +
                "</p>" +

                "<p>Product 3: ₹" +
                productTotal[2].toFixed(2) +
                "</p>" +

                "<hr>" +

                "<p><b>Total Amount:</b> ₹" +
                total.toFixed(2) +
                "</p>" +

                "<p><b>Discount:</b> ₹" +
                discount.toFixed(2) +
                "</p>" +

                "<p><b>Final Payable Amount:</b> ₹" +
                finalAmount.toFixed(2) +
                "</p>";

        }