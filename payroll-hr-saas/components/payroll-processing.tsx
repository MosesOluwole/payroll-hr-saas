import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PayrollProcessing() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Payroll Processing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/3">
                <Label htmlFor="pay-period">Pay Period</Label>
                <Input id="pay-period" type="month" />
              </div>
              <div className="w-1/3">
                <Label htmlFor="pay-date">Pay Date</Label>
                <Input id="pay-date" type="date" />
              </div>
              <div className="w-1/3 flex items-end">
                <Button className="w-full">Calculate Payroll</Button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Base Salary</TableHead>
                  <TableHead>Allowances</TableHead>
                  <TableHead>Deductions</TableHead>
                  <TableHead>Net Pay</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>$5,000</TableCell>
                  <TableCell>$500</TableCell>
                  <TableCell>$1,000</TableCell>
                  <TableCell>$4,500</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>$6,000</TableCell>
                  <TableCell>$600</TableCell>
                  <TableCell>$1,200</TableCell>
                  <TableCell>$5,400</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="flex justify-end space-x-4">
              <Button variant="outline">Save Draft</Button>
              <Button>Generate Payslips</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

