import { Info } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export default function SettingsForm() {
  function handleSave() {
    toast.success('Settings saved!', {
      description: 'Your preferences have been updated.',
    })
  }

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Demo Mode</AlertTitle>
        <AlertDescription>
          These settings are for demonstration purposes. Changes won&apos;t be persisted.
        </AlertDescription>
      </Alert>

      <Accordion
        type="multiple"
        defaultValue={['general', 'notifications', 'appearance']}
        className="w-full">
        <AccordionItem value="general">
          <AccordionTrigger className="text-base">General</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-6 pt-2 pb-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="cafe-name">Cafe Name</Label>
                <Input id="cafe-name" defaultValue="Cozy Cafe" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="cafe-desc">Description</Label>
                <Textarea
                  id="cafe-desc"
                  defaultValue="A warm and welcoming neighborhood cafe serving artisanal coffee and freshly baked goods."
                  rows={3}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="america-new-york">
                  <SelectTrigger id="timezone" className="w-64">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="america-new-york">America/New York</SelectItem>
                    <SelectItem value="america-chicago">America/Chicago</SelectItem>
                    <SelectItem value="america-denver">America/Denver</SelectItem>
                    <SelectItem value="america-los-angeles">America/Los Angeles</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="notifications">
          <AccordionTrigger className="text-base">Notifications</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-6 pt-2 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <Label>Order Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified on new orders</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <Label>Low Stock Warnings</Label>
                  <p className="text-sm text-muted-foreground">Alert when ingredients run low</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Email Reports</Label>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="daily" defaultChecked />
                    <label htmlFor="daily" className="text-sm">
                      Daily summary
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="weekly" defaultChecked />
                    <label htmlFor="weekly" className="text-sm">
                      Weekly report
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="monthly" />
                    <label htmlFor="monthly" className="text-sm">
                      Monthly analytics
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="appearance">
          <AccordionTrigger className="text-base">Appearance</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-6 pt-2 pb-4">
              <div className="flex flex-col gap-3">
                <Label>Font Size</Label>
                <Slider defaultValue={[16]} min={12} max={24} step={1} />
                <p className="text-sm text-muted-foreground">Adjust the base font size (12-24px)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <Label>Compact Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Reduce spacing in tables and lists
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <Label>Show Animations</Label>
                  <p className="text-sm text-muted-foreground">Enable transition effects</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button onClick={handleSave} className="self-start">
        Save Settings
      </Button>
    </div>
  )
}
